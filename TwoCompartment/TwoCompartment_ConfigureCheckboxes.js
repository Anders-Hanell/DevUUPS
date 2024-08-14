var TwoCompartment_DisplayPlasmaConcentration = true;
var TwoCompartment_LogPlasmaConcentration = true;
var TwoCompartment_DisplayPeripheralConcentration = false;
var TwoCompartment_LogPeripheralConcentration = false;

function ConfigureTwoCompartment_DisplayPlasmaConcentrationCheckbox() {
  const container = document.getElementById('TwoCompartment_DisplayPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display plasma concentration";
  checkbox.checked = TwoCompartment_DisplayPlasmaConcentration;
}

function ConfigureTwoCompartment_LogPlasmaConcentrationCheckbox() {
  const container = document.getElementById('TwoCompartment_LogPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Log plasma concentration";
  checkbox.checked = TwoCompartment_LogPlasmaConcentration;
}

function ConfigureTwoCompartment_DisplayPeripheralConcentrationCheckbox() {
  const container = document.getElementById('TwoCompartment_DisplayPeripheralConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display peripheral concentration";
  checkbox.checked = TwoCompartment_DisplayPeripheralConcentration;
}

function ConfigureTwoCompartment_LogPeripheralConcentrationCheckbox() {
  const container = document.getElementById('TwoCompartment_LogPeripheralConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Log peripheral concentration";
  checkbox.checked = TwoCompartment_LogPeripheralConcentration;
}

function TwoCompartment_OnCheckboxChange() {
  let container = document.getElementById("TwoCompartment_DisplayPlasmaConcentrationCheckbox");
  let checkbox = container.querySelector('input');
  TwoCompartment_DisplayPlasmaConcentration = checkbox.checked;

  container = document.getElementById("TwoCompartment_LogPlasmaConcentrationCheckbox");
  checkbox = container.querySelector('input');
  TwoCompartment_LogPlasmaConcentration = checkbox.checked;

  container = document.getElementById("TwoCompartment_DisplayPeripheralConcentrationCheckbox");
  checkbox = container.querySelector('input');
  TwoCompartment_DisplayPeripheralConcentration = checkbox.checked;

  container = document.getElementById("TwoCompartment_LogPeripheralConcentrationCheckbox");
  checkbox = container.querySelector('input');
  TwoCompartment_LogPeripheralConcentration = checkbox.checked;
  
  if (GlobalState.CurrentTab == "Both") {
    TwoCompartment_UpdateGraph();
  }
}