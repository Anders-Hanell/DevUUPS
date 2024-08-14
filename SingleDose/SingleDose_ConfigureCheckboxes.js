var SingleDose_DisplayPlasmaConcentration = true;
var SingleDose_LogPlasmaConcentration = false;
var SingleDose_DisplayAbsorbtionRate = false;
var SingleDose_DisplayCmax = false;
var SingleDose_DisplayTmax = false;
var SingleDose_DisplayAuc = false;

function ConfigureSingleDose_DisplayPlasmaConcentrationCheckbox() {
  const container = document.getElementById('SingleDose_DisplayPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display plasma concentration";
  checkbox.checked = SingleDose_DisplayPlasmaConcentration;
}

function ConfigureSingleDose_LogPlasmaConcentrationCheckbox() {
  const container = document.getElementById('SingleDose_LogPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Log plasma concentration";
  checkbox.checked = SingleDose_LogPlasmaConcentration;
}

function ConfigureSingleDose_DisplayAbsorbtionRateCheckbox() {
  const container = document.getElementById('SingleDose_DisplayAbsorbtionRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display absorbtion rate";
  checkbox.checked = SingleDose_DisplayAbsorbtionRate;
}

function ConfigureSingleDose_DisplayCmaxCheckbox() {
  const container = document.getElementById('SingleDose_DisplayCmaxCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display Cmax";
  checkbox.checked = SingleDose_DisplayCmax;
}

function ConfigureSingleDose_DisplayTmaxCheckbox() {
  const container = document.getElementById('SingleDose_DisplayTmaxCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display Tmax";
  checkbox.checked = SingleDose_DisplayTmax;
}

function ConfigureSingleDose_DisplayAucCheckbox() {
  const container = document.getElementById('SingleDose_DisplayAucCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display AUC";
  checkbox.checked = SingleDose_DisplayAuc;
}

function SingleDose_OnCheckboxChange() {
  let container = document.getElementById("SingleDose_DisplayPlasmaConcentrationCheckbox");
  let checkbox = container.querySelector('input');
  SingleDose_DisplayPlasmaConcentration = checkbox.checked;

  container = document.getElementById("SingleDose_LogPlasmaConcentrationCheckbox");
  checkbox = container.querySelector('input');
  SingleDose_LogPlasmaConcentration = checkbox.checked;

  container = document.getElementById("SingleDose_DisplayAbsorbtionRateCheckbox");
  checkbox = container.querySelector('input');
  SingleDose_DisplayAbsorbtionRate = checkbox.checked;

  container = document.getElementById("SingleDose_DisplayCmaxCheckbox");
  checkbox = container.querySelector('input');
  SingleDose_DisplayCmax = checkbox.checked;

  container = document.getElementById("SingleDose_DisplayTmaxCheckbox");
  checkbox = container.querySelector('input');
  SingleDose_DisplayTmax = checkbox.checked;

  container = document.getElementById("SingleDose_DisplayAucCheckbox");
  checkbox = container.querySelector('input');
  SingleDose_DisplayAuc = checkbox.checked;

  if (GlobalState.CurrentTab == "Both") {
    SingleDose_UpdateGraph();
  }
}