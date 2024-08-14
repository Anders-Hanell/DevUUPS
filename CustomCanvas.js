function OnNewSliderValue() {
  UpdateSliderValueLabels();
  
  if (GlobalState.CurrentTab == "Both") {
    UpdateCurrentGraph();
  }
}

function UpdateCurrentGraph() {
  if (GlobalState.CurrentTab == "Controls") {
    return;
  }
  
  if (GlobalState.CurrentPage == "SingleDose") {
    SingleDose_UpdateGraph();
  }
  
  if (GlobalState.CurrentPage == "ConstantInfusion") {
    ConstantInfusion_UpdateGraph();
  }
  
  if (GlobalState.CurrentPage == "OralAdmin") {
    OralAdmin_UpdateGraph();
  }

  if (GlobalState.CurrentPage == "TwoCompartment") {
    TwoCompartment_UpdateGraph();
  }
}

function DetermineCanvasFont(canvasContext, availableWidth, availableHeight, longestString) {
  canvasContext.font = '1px arial';
  textMeasurements = canvasContext.measureText(longestString);
  
  fontHeight = textMeasurements.fontBoundingBoxAscent + textMeasurements.fontBoundingBoxDescent;
  const fontSizeByHeight = availableHeight / fontHeight;

  fontWidth = textMeasurements.width;
  const fontSizeByWidth = availableWidth / fontWidth;

  const fontSize = Math.min(fontSizeByWidth, fontSizeByHeight);

  return new Array(fontSize + "px arial", fontSize/2 + "px arial");
}