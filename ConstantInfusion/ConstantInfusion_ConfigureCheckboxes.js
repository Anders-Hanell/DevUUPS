var ConstantInfusion_DisplayPlasmaConcentration = true;
var ConstantInfusion_DisplayInfusionRate = false;
var ConstantInfusion_DisplayEliminationRate = false;
var ConstantInfusion_DisplayHalflifeMarker = false;
var ConstantInfusion_DisplayClearance = false;
var ConstantInfusion_DisplayTherapeuticWindow = true;

function ConfigureConstantInfusion_DisplayPlasmaConcentrationCheckbox() {
  const container = document.getElementById('ConstantInfusion_DisplayPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display plasma concentration";
  checkbox.checked = ConstantInfusion_DisplayPlasmaConcentration;
}

function ConfigureConstantInfusion_DisplayInfusionRateCheckbox() {
  const container = document.getElementById('ConstantInfusion_DisplayInfusionRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display infusion rate";
  checkbox.checked = ConstantInfusion_DisplayInfusionRate;
}

function ConfigureConstantInfusion_DisplayEliminationRateCheckbox() {
  const container = document.getElementById('ConstantInfusion_DisplayEliminationRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display elimination rate";
  checkbox.checked = ConstantInfusion_DisplayEliminationRate;
}

function ConfigureConstantInfusion_DisplayHalflifeMarkerCheckbox() {
  const container = document.getElementById('ConstantInfusion_DisplayHalflifeMarkerCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display 5 half-lifes marker";
  checkbox.checked = ConstantInfusion_DisplayHalflifeMarker;
}

function ConfigureConstantInfusion_DisplayClearanceCheckbox() {
  const container = document.getElementById('ConstantInfusion_DisplayClearanceCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display clearance level";
  checkbox.checked = ConstantInfusion_DisplayClearance;
}

function ConfigureConstantInfusion_DisplayTherapeuticWindowCheckbox() {
  const container = document.getElementById('ConstantInfusion_DisplayTherapeuticWindowCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display therapeutic window";
  checkbox.checked = ConstantInfusion_DisplayTherapeuticWindow;
}

function ConstantInfusion_OnCheckboxChange() {
  let container = document.getElementById("ConstantInfusion_DisplayPlasmaConcentrationCheckbox");
  let checkbox = container.querySelector('input');
  ConstantInfusion_DisplayPlasmaConcentration = checkbox.checked;

  container = document.getElementById("ConstantInfusion_DisplayInfusionRateCheckbox");
  checkbox = container.querySelector('input');
  ConstantInfusion_DisplayInfusionRate = checkbox.checked;

  container = document.getElementById("ConstantInfusion_DisplayEliminationRateCheckbox");
  checkbox = container.querySelector('input');
  ConstantInfusion_DisplayEliminationRate = checkbox.checked;

  container = document.getElementById("ConstantInfusion_DisplayHalflifeMarkerCheckbox");
  checkbox = container.querySelector('input');
  ConstantInfusion_DisplayHalflifeMarker = checkbox.checked;

  container = document.getElementById("ConstantInfusion_DisplayClearanceCheckbox");
  checkbox = container.querySelector('input');
  ConstantInfusion_DisplayClearance = checkbox.checked;

  container = document.getElementById("ConstantInfusion_DisplayTherapeuticWindowCheckbox");
  checkbox = container.querySelector('input');
  ConstantInfusion_DisplayTherapeuticWindow = checkbox.checked;

  if (GlobalState.CurrentTab == "Both") {
    ConstantInfusion_UpdateGraph();
  }
}