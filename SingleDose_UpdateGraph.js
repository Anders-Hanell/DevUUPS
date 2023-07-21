function SingleDose_UpdateGraph() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var calculatedValues = SingleDose_CalculateValues(
    SingleDose_DoseSliderValue,
    SingleDose_HalflifeSliderValue,
    SingleDose_TabletDissolveTimeSliderValue);
  
  var plasmaConc = calculatedValues[0];
  var absorbtionRate = calculatedValues[1];
  var cmax = calculatedValues[2];
  var auc = calculatedValues[3];
  var tmaxIndex = calculatedValues[4];
  
  const numDataPoints = plasmaConc.length;

  const plasmaConcColor = "#428bca";
  const absorbtionRateColor = "#bd2b30";
  const cmaxColor = "#3f9762";
  const aucColor = "white";

  let canvasPadding = new Padding(10, 10, 10, 10);

  const graphRegion = new DrawRegion(
    canvas.height - canvasPadding.bottom,
    canvasPadding.left,
    canvasPadding.top,
    canvas.width - canvasPadding.right
  )

  const axisWidth = canvas.width * 0.06;
  const yAxisWidth = axisWidth;
  const xAxisHeight = yAxisWidth * 0.6;
  const rightSideAxisSpacing = yAxisWidth * 0.1;

  const numRightHandYaxises = 3;

  const tickSize = axisWidth * 0.1;

  let plotRegionMargin = new Margin(20, 20, 0, 20);

  const leftMargin = axisWidth;
  const rightMargin = axisWidth * numRightHandYaxises;
  const bottomMargin = canvas.width * 0.03;
  const upperMargin = canvas.width * 0.01;

  const yAxisHeight = canvas.height - bottomMargin - upperMargin;

  const plotRegion = new DrawRegion(
    graphRegion.bottom - xAxisHeight - plotRegionMargin.bottom,
    graphRegion.left + yAxisWidth + plotRegionMargin.left,
    graphRegion.top + plotRegionMargin.top,
    graphRegion.right - numRightHandYaxises * yAxisWidth - (numRightHandYaxises - 1) * rightSideAxisSpacing - plotRegionMargin.right
  )

  const clipRegion = new DrawRegion(
    plotRegion.bottom + 1,
    plotRegion.left - 1,
    plotRegion.top - 1,
    plotRegion.right + 1)

  const leftYAxisRegion = new DrawRegion(
    plotRegion.bottom,
    graphRegion.left,
    plotRegion.top,
    graphRegion.left + yAxisWidth
  )

  const xAxisRegion = new DrawRegion(
    graphRegion.bottom,
    plotRegion.left,
    graphRegion.bottom - xAxisHeight,
    plotRegion.right
  )

  const rightSideAxisRegion = new DrawRegion(
    plotRegion.bottom,
    plotRegion.right + plotRegionMargin.right,
    plotRegion.top,
    graphRegion.right
  )

  const absorbtionRateAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + yAxisWidth
  )

  const cmaxAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + yAxisWidth + rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 2 * yAxisWidth + rightSideAxisSpacing
  )

  const aucAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + 2 * yAxisWidth + rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 3 * yAxisWidth + rightSideAxisSpacing
  )

  const canvasFonts = DetermineCanvasFont(ctx, yAxisHeight * 0.8, axisWidth * 0.5, "Plasma concentration (mg/l)");
  const axisLabelFont = canvasFonts[0];
  const tickMarkLabelFont = canvasFonts[1];
  
  const drawSettings = new DrawSettings(axisLabelFont, tickMarkLabelFont, 2);

  const plasmaConcAxisTickValues = new Array(0, 2.5, 5, 7.5, 10);
  const leftYxis = new LeftYAxis("Plasma concentration (mg/L)", leftYAxisRegion, plasmaConcAxisTickValues, plasmaConcColor, false);

  const logPlasmaConcAxisTickValues = new Array(0.01, 0.1, 1, 10.0);
  const logLeftYxis = new LeftYAxis("Log plasma concentration (mg/L)", leftYAxisRegion, logPlasmaConcAxisTickValues, plasmaConcColor, true); 

  const timeAxisLabels = new Array(0, 6, 12, 18, 24);
  const xAxis = new XAxis("Time (hours)", xAxisRegion, timeAxisLabels, "white");

  const absorbtionRateAxisTickValues = new Array(0, 10, 20, 30, 40, 50);
  const absorbtionRateAxis = new RightYAxis("Absorbtion rate (mg/min)", absorbtionRateAxisRegion, absorbtionRateAxisTickValues, absorbtionRateColor, false);

  const cmaxAxisTickValues = new Array(0, 2.5, 5, 7.5, 10);
  const cmaxAxis = new RightYAxis("Cmax (mg/L)", cmaxAxisRegion, cmaxAxisTickValues, cmaxColor, false);

  const logcmaxAxisTickValues = new Array(0.01, 0.1, 1, 10.0);
  const logcmaxAxis = new RightYAxis("Log Cmax (mg/L)", cmaxAxisRegion, logcmaxAxisTickValues, cmaxColor, true);

  const aucAxisTickValues = new Array(0, 25, 50, 75, 100);
  const aucAxis = new RightYAxis("AUC (hours * mg/L)", aucAxisRegion, aucAxisTickValues, aucColor, false);

  var yPos = [];
  for (let i = 0; i < numDataPoints; i++) {
    yPos.push(plasmaConc[i] * plotRegion.height / 10.0);
  }

  let lowerLog = Math.log10(0.01);
  let upperLog = Math.log10(10.0);

  let logPlasmaConcPosition = [];
  for (let i = 0; i < plasmaConc.length; i++) {
       
    let logPlasmaConc = Math.log10(plasmaConc[i]);
    if (plasmaConc[i] == 0) {
      logPlasmaConc = Math.log10(0.0001);
    }
    
    const fractionalPosition = (logPlasmaConc - lowerLog) / (upperLog - lowerLog);

    logPlasmaConcPosition.push(fractionalPosition * plotRegion.height);
  }

  var timeValues = [];
  for (let i = 0.0; i < numDataPoints; i++) {
    timeValues.push(i * plotRegion.width / numDataPoints);
  }
  
  var absorbtionRateYpos = [];
  for (let i = 0; i < numDataPoints; i++) {
    absorbtionRateYpos.push(absorbtionRate[i] * plotRegion.height / 50.0);
  }

  var cmaxYpos = [];
  for (let i = 0; i < numDataPoints; i++) {
    cmaxYpos.push(cmax[i] * plotRegion.height / 10.0);
  }

  lowerLog = Math.log10(0.01);
  upperLog = Math.log10(10.0);

  let logCmaxPosition = [];
  for (let i = 0; i < cmax.length; i++) {
       
    let logCmaxValue = Math.log10(cmax[i]);
    if (plasmaConc[i] == 0) {
      logCmaxValue = Math.log10(0.0001);
    }
    
    const fractionalPosition = (logCmaxValue - lowerLog) / (upperLog - lowerLog);

    logCmaxPosition.push(fractionalPosition * plotRegion.height);
  }

  var aucYpos = [];
  for (let i = 0; i < numDataPoints; i++) {
    aucYpos.push(auc[i] * plotRegion.height / 100.0);
  }

  // x-axis
  xAxis.drawAxis(ctx, drawSettings, tickSize);
  
  // y-axis
  if (SingleDose_LogPlasmaConcentration) {
    logLeftYxis.drawAxis(ctx, drawSettings, tickSize);
  }
  else {
    leftYxis.drawAxis(ctx, drawSettings, tickSize);
  }

  // Release rate y-axis
  absorbtionRateAxis.drawAxis(ctx, drawSettings, tickSize);

  // Cmax y-axis
  if (SingleDose_LogPlasmaConcentration) {
    logcmaxAxis.drawAxis(ctx, drawSettings, tickSize);
  }
  else {
    cmaxAxis.drawAxis(ctx, drawSettings, tickSize);
  }

  // AUC y-axis
  aucAxis.drawAxis(ctx, drawSettings, tickSize);

  SetClipRegion(ctx, clipRegion);

  // plasma conc
  if (SingleDose_DisplayPlasmaConcentration & ! SingleDose_LogPlasmaConcentration) {
    ctx.strokeStyle = plasmaConcColor;
    ctx.fillStyle = plasmaConcColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom);
    for (let i = 0; i < numDataPoints; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - yPos[i]);
    }
    ctx.stroke();
  }

  if (SingleDose_DisplayPlasmaConcentration & SingleDose_LogPlasmaConcentration) {
    ctx.strokeStyle = plasmaConcColor;
    ctx.fillStyle = plasmaConcColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom);
    for (let i = 0; i < numDataPoints; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - logPlasmaConcPosition[i]);
    }
    ctx.stroke();
  }

  // Absorbtion rate
  if (SingleDose_DisplayAbsorbtionRate && SingleDose_AdminTypeSelection == "Oral") {
    ctx.strokeStyle = absorbtionRateColor;
    ctx.fillStyle = absorbtionRateColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - absorbtionRateYpos[0]);
    for (let i = 0; i < numDataPoints; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - absorbtionRateYpos[i]);
    }
    ctx.stroke();
  }

  // Cmax
  if (SingleDose_DisplayCmax & ! SingleDose_LogPlasmaConcentration) {
    ctx.strokeStyle = cmaxColor;
    ctx.fillStyle = cmaxColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - cmaxYpos[0]);
    for (let i = 0; i < numDataPoints; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - cmaxYpos[i]);
    }
    ctx.stroke();
  }

  if (SingleDose_DisplayCmax & SingleDose_LogPlasmaConcentration) {
    ctx.strokeStyle = cmaxColor;
    ctx.fillStyle = cmaxColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - logCmaxPosition[1]);
    for (let i = 1; i < numDataPoints; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - logCmaxPosition[i]);
    }
    ctx.stroke();
  }

  // AUC
  if (SingleDose_DisplayAuc) {
    ctx.strokeStyle = aucColor;
    ctx.fillStyle = aucColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - aucYpos[0]);
    for (let i = 0; i < numDataPoints; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - aucYpos[i]);
    }
    ctx.stroke();
  }

  // Tmax
  if (SingleDose_DisplayTmax) {
    ctx.strokeStyle = cmaxColor;
    ctx.fillStyle = cmaxColor;

    var tMaxPosition = plotRegion.width * tmaxIndex / numDataPoints;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left + tMaxPosition, plotRegion.bottom);
    ctx.lineTo(plotRegion.left + tMaxPosition, plotRegion.top);
    ctx.stroke();
  }
}