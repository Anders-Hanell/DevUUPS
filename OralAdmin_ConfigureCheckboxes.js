var OralAdmin_DisplayPlasmaConcentration = true;
var OralAdmin_DisplayReleaseRate = false;
var OralAdmin_DisplayAbsorbtionRate = false;

function ConfigureOralAdmin_DisplayPlasmaConcentrationCheckbox() {
  const container = document.getElementById('OralAdmin_DisplayPlasmaConcentrationCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display plasma concentration";
  checkbox.checked = OralAdmin_DisplayPlasmaConcentration;
}

function ConfigureOralAdmin_DisplayReleaseRateCheckbox() {
  const container = document.getElementById('OralAdmin_DisplayReleaseRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display release rate";
  checkbox.checked = OralAdmin_DisplayReleaseRate;
}

function ConfigureOralAdmin_DisplayAbsorbtionRateCheckbox() {
  const container = document.getElementById('OralAdmin_DisplayAbsorbtionRateCheckbox');
  const checkbox = container.querySelector('input');
  const label = container.querySelector('span');

  label.textContent = "Display absorbtion rate";
  checkbox.checked = OralAdmin_DisplayAbsorbtionRate;
}

function OralAdmin_OnCheckboxChange() {
  let container = document.getElementById("OralAdmin_DisplayPlasmaConcentrationCheckbox");
  let checkbox = container.querySelector('input');
  OralAdmin_DisplayPlasmaConcentration = checkbox.checked;

  container = document.getElementById("OralAdmin_DisplayReleaseRateCheckbox");
  checkbox = container.querySelector('input');
  OralAdmin_DisplayReleaseRate = checkbox.checked;

  container = document.getElementById("OralAdmin_DisplayAbsorbtionRateCheckbox");
  checkbox = container.querySelector('input');
  OralAdmin_DisplayAbsorbtionRate = checkbox.checked;

  if (CurrentTab == "Both") {
    OralAdmin_UpdateGraph();
  }
}