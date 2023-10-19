function ConstantInfusion_UpdateGraph() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  const bolusDose = ConstantInfusion_BolusDoseSliderValue * 1.0;
  const infusionRate = ConstantInfusion_InfusionRateSliderValue * 1.0;
  const halflife = ConstantInfusion_HalflifeSliderValue * 1.0;
  const infusionTime = ConstantInfusion_InfusionTimeSliderValue * 1.0;

  var calculatedValues = ConstantInfusion_CalculateValues(bolusDose, infusionRate, halflife, infusionTime);
  var plasmaConc = calculatedValues[0];
  var elimRate = calculatedValues[1];
  var infSpeed = calculatedValues[2];
  var fiveHalfLifes = calculatedValues[3];
  var clearanceLevels = calculatedValues[4];

  let theraLowerConc = 6000;
  let theraUpperConc = 8000;
  let theraLowerPosition = theraLowerConc / 10000;
  let theraUpperPosition = theraUpperConc / 10000;

  const plasmaConcColor = "#428bca";
  const infRateColor = "#bd2b30";
  const elimRateColor = "#3f9762";
  const halfLifeMarkerColor = "#fd9228";

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

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

  const infusionAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + yAxisWidth
  )

  const eliminationAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + yAxisWidth + rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 2 * yAxisWidth + rightSideAxisSpacing
  )

  const clearanceAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + 2 * yAxisWidth + 2 * rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 3 * yAxisWidth + 2 * rightSideAxisSpacing
  )

  const canvasFonts = DetermineCanvasFont(ctx, yAxisHeight * 0.8, axisWidth * 0.5, "Plasma concentration (mg/ml)");
  const axisLabelFont = canvasFonts[0];
  const tickMarkLabelFont = canvasFonts[1];
  
  const drawSettings = new DrawSettings(axisLabelFont, tickMarkLabelFont, 2);

  const plasmaConcAxisTickValues = new Array(0, 2500, 5000, 7500, 10000);
  const leftYxis = new LeftYAxis("Plasma concentration (mg/ml)", leftYAxisRegion, plasmaConcAxisTickValues, plasmaConcColor, false);

  const timeAxisLabels = new Array(0, 250, 500, 750, 1000);
  const xAxis = new XAxis("Time (minutes)", xAxisRegion, timeAxisLabels, "white");

  const infusionAxisTickValues = new Array(0, 25, 50, 75, 100);
  const infusionAxis = new RightYAxis("Infusion rate (mg/min)", infusionAxisRegion, infusionAxisTickValues, infRateColor, false);

  const elimAxisTickValues = infusionAxisTickValues;
  const eliminationAxis = new RightYAxis("Elimination rate (mg/min)", eliminationAxisRegion, elimAxisTickValues, elimRateColor, false);

  const clearanceAxisTickValues = new Array(0, 1, 2, 3, 4, 5);
  const clearanceAxis = new RightYAxis("Clearance (ml/min)", clearanceAxisRegion, clearanceAxisTickValues, "white", false);

  var yPos = [];
  for (let i = 0; i < 1000; i++) {
    yPos.push(plasmaConc[i] * plotRegion.height / 10000.0);
  }

  var elimYpos = [];
  for (let i = 0; i < 1000; i++) {
    elimYpos.push(elimRate[i] * plotRegion.height / 100.0);
  }

  var infYpos = [];
  for (let i = 0; i < 1000; i++) {
    infYpos.push(infSpeed[i] * plotRegion.height / 100.0);
  }

  var timeValues = [];
  for (let i = 0.0; i < 1000.0; i++) {
    timeValues.push(i * plotRegion.width / 1000.0);
  }

  var halfLifeMarkerPosition = plotRegion.width * fiveHalfLifes / 1000;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  
  const lineWidth = 2;
  ctx.lineWidth = lineWidth;

  // x-axis
  xAxis.drawAxis(ctx, drawSettings, tickSize);
  
  // y-axis
  leftYxis.drawAxis(ctx, drawSettings, tickSize);

  // Infusion rate y-axis
  infusionAxis.drawAxis(ctx, drawSettings, tickSize);

  // Elimination rate y-axis
  eliminationAxis.drawAxis(ctx, drawSettings, tickSize);

  // Clearance y-axis
  clearanceAxis.drawAxis(ctx, drawSettings, tickSize);

  SetClipRegion(ctx, clipRegion);

  // Therapeutic Window
  if (ConstantInfusion_DisplayTherapeuticWindow) {
    ctx.strokeStyle = halfLifeMarkerColor;
    ctx.fillStyle = halfLifeMarkerColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - theraLowerPosition * plotRegion.height);
    ctx.lineTo(plotRegion.right, plotRegion.bottom - theraLowerPosition * plotRegion.height);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - theraUpperPosition * plotRegion.height);
    ctx.lineTo(plotRegion.right, plotRegion.bottom - theraUpperPosition * plotRegion.height);
    ctx.stroke();
  }

  // Plasma concentration
  if (ConstantInfusion_DisplayPlasmaConcentration) {
    ctx.strokeStyle = plasmaConcColor;
    ctx.fillStyle = plasmaConcColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom);
    for (let i = 0; i < 1000; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - yPos[i]);
    }
    ctx.stroke();
  }

  // Infusion rate
  if (ConstantInfusion_DisplayInfusionRate) {
    ctx.strokeStyle = infRateColor;
    ctx.fillStyle = infRateColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - infYpos[0]);
    for (let i = 0; i < 1000; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - infYpos[i]);
    }
    ctx.stroke();
  }

  // Elimination rate
  if (ConstantInfusion_DisplayEliminationRate) {
    ctx.strokeStyle = elimRateColor;
    ctx.fillStyle = elimRateColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - elimYpos[0]);
    for (let i = 0; i < 1000; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - elimYpos[i]);
    }
    ctx.stroke();
  }

  // Clearance
  ctx.strokeStyle = "white";
  ctx.fillStyle = "white";
  
  const cleranceYPos = clearanceLevels[0] / 5 * plotRegion.height;

  if (ConstantInfusion_DisplayClearance) {
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - cleranceYPos);
    ctx.lineTo(plotRegion.right, plotRegion.bottom - cleranceYPos);
    ctx.stroke();
  }

  // Five half lifes
  ctx.strokeStyle = halfLifeMarkerColor;
  ctx.fillStyle = halfLifeMarkerColor;

  if (ConstantInfusion_DisplayHalflifeMarker) {
    ctx.beginPath();
    ctx.moveTo(plotRegion.left + halfLifeMarkerPosition, plotRegion.bottom);
    ctx.lineTo(plotRegion.left + halfLifeMarkerPosition, plotRegion.top);
    ctx.stroke();
  }
}