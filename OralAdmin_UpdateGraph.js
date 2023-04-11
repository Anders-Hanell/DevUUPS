function OralAdmin_UpdateGraph() {
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  canvas.width = canvas.scrollWidth;
  canvas.height = canvas.scrollHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  var calculatedValues = OralAdmin_CalculateValues(
    OralAdmin_DailyDoseSliderSliderValue,
    OralAdmin_TabletsPerDaySliderValue,
    OralAdmin_TabletDissolveTimeSliderValue,
    OralAdmin_BioavailabilitySliderValue
  );
  
  var plasmaConc = calculatedValues[0];
  var releaseRate = calculatedValues[1];
  var absorbtionRate = calculatedValues[2];

  const plasmaConcColor = "#428bca";
  const releaseRateColor = "#bd2b30";
  const absRateColor = "#3f9762";

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

  const releaseRateAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + yAxisWidth
  )

  const absorbtionAxisRegion = new DrawRegion(
    rightSideAxisRegion.bottom,
    rightSideAxisRegion.left + yAxisWidth + rightSideAxisSpacing,
    rightSideAxisRegion.top,
    rightSideAxisRegion.left + 2 * yAxisWidth + rightSideAxisSpacing
  )

  const canvasFonts = DetermineCanvasFont(ctx, yAxisHeight * 0.8, axisWidth * 0.5, "Plasma concentration (mg/ml)");
  const axisLabelFont = canvasFonts[0];
  const tickMarkLabelFont = canvasFonts[1];
  
  const drawSettings = new DrawSettings(axisLabelFont, tickMarkLabelFont, 2);

  const plasmaConcAxisTickValues = new Array(0, 250, 500, 700, 1000);
  const leftYxis = new LeftYAxis("Plasma concentration (mg/ml)", leftYAxisRegion, plasmaConcAxisTickValues, plasmaConcColor, false);

  const timeAxisLabels = new Array(0, 5, 10, 15, 20);
  const xAxis = new XAxis("Time (days)", xAxisRegion, timeAxisLabels, "white");

  const releaseRateAxisTickValues = new Array(0, 25, 50, 75, 100);
  const releaseRateAxis = new RightYAxis("Release rate (mg/hour)", releaseRateAxisRegion, releaseRateAxisTickValues, releaseRateColor, false);

  const absorbtionAxisTickValues = new Array(0, 25, 50, 75, 100);
  const absorbtionRateAxis = new RightYAxis("Absorbtion rate (mg/hour)", absorbtionAxisRegion, absorbtionAxisTickValues, absRateColor, false);

  var yPos = [];
  for (let i = 0; i < 1000; i++) {
    yPos.push(plasmaConc[i] * plotRegion.height / 1000.0);
  }

  var timeValues = [];
  for (let i = 0.0; i < 1000.0; i++) {
    timeValues.push(i * plotRegion.width / 1000.0);
  }
  
  var releaseRateYpos = [];
  for (let i = 0; i < 1000; i++) {
    releaseRateYpos.push(releaseRate[i] * plotRegion.height / 100.0);
  }

  var absorbtionRateYpos = [];
  for (let i = 0; i < 1000; i++) {
    absorbtionRateYpos.push(absorbtionRate[i] * plotRegion.height / 100.0);
  }

  // x-axis
  xAxis.drawAxis(ctx, drawSettings, tickSize);
  
  // y-axis
  leftYxis.drawAxis(ctx, drawSettings, tickSize);

  // Release rate y-axis
  releaseRateAxis.drawAxis(ctx, drawSettings, tickSize);

  // Absorbtion rate y-axis
  absorbtionRateAxis.drawAxis(ctx, drawSettings, tickSize);

  SetClipRegion(ctx, clipRegion);

  // plasma conc
  if (OralAdmin_DisplayPlasmaConcentration) {
    ctx.strokeStyle = plasmaConcColor;
    ctx.fillStyle = plasmaConcColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom);
    for (let i = 0; i < 1000; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - yPos[i]);
    }
    ctx.stroke();
  }

  // Release rate
  if (OralAdmin_DisplayReleaseRate) {
    ctx.strokeStyle = releaseRateColor;
    ctx.fillStyle = releaseRateColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - releaseRateYpos[0]);
    for (let i = 0; i < 1000; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - releaseRateYpos[i]);
    }
    ctx.stroke();
  }

  // Absorbtion rate
  if (OralAdmin_DisplayAbsorbtionRate) {
    ctx.strokeStyle = absRateColor;
    ctx.fillStyle = absRateColor;
    
    ctx.beginPath();
    ctx.moveTo(plotRegion.left, plotRegion.bottom - absorbtionRateYpos[0]);
    for (let i = 0; i < 1000; i++) {
      ctx.lineTo(plotRegion.left + timeValues[i], plotRegion.bottom - absorbtionRateYpos[i]);
    }
    ctx.stroke();
  }
}