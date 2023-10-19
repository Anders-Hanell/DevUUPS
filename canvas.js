function OnNewSliderValue() {
  UpdateSliderValueLabels();
  
  if (CurrentTab == "Both") {
    UpdateCurrentGraph();
  }
}

function OnCanvasResize() {
  UpdateCurrentGraph();
}

function UpdateCurrentGraph() {
  if (CurrentTab == "Controls") {
    return;
  }
  
  if (CurrentModel == "SingleDose") {
    SingleDose_UpdateGraph();
  }
  
  if (CurrentModel == "ConstantInfusion") {
    ConstantInfusion_UpdateGraph();
  }
  
  if (CurrentModel == "OralAdmin") {
    OralAdmin_UpdateGraph();
  }

  if (CurrentModel == "TwoCompartment") {
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