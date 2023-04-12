var OralAdmin_TabletStrengthSliderValue = 500;
var OralAdmin_TabletsPerAdminSliderValue = 2;
var OralAdmin_AdminsPerDaySliderValue = 2;
var OralAdmin_TabletDissolveTimeSliderValue = 4;
var OralAdmin_BioavailabilitySliderValue = 50;
var OralAdmin_ClearanceSliderValue = 50;

function ConfigureOralAdmin_TabletStrengthSlider() {
  const container = document.getElementById('OralAdmin_TabletStrengthSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Tablet strength (mg)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = OralAdmin_TabletStrengthSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "10";
  slider.value = OralAdmin_TabletStrengthSliderValue;
}

function ConfigureOralAdmin_TabletsPerAdminSlider() {
  const container = document.getElementById('OralAdmin_TabletsPerAdminSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Tablets per administration";
  minLabelSpan.innerText = "1";
  valueLabelSpan.innerText = OralAdmin_TabletsPerAdminSliderValue;
  maxLabelSpan.innerText = "5";

  slider.min = "1";
  slider.max = "5";
  slider.step = "1";
  slider.value = OralAdmin_TabletsPerAdminSliderValue;
}

function ConfigureOralAdmin_AdminsPerDaySlider() {
  const container = document.getElementById('OralAdmin_AdminsPerDaySlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Administrations per day";
  minLabelSpan.innerText = "1";
  valueLabelSpan.innerText = OralAdmin_AdminsPerDaySliderValue;
  maxLabelSpan.innerText = "6";

  slider.min = "1";
  slider.max = "6";
  slider.step = "1";
  slider.value = OralAdmin_AdminsPerDaySliderValue;
}

function ConfigureOralAdmin_TabletDissolveTimeSlider() {
  const container = document.getElementById('OralAdmin_TabletDissolveTimeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Tablet dissolve time (hours)";
  minLabelSpan.innerText = "1";
  valueLabelSpan.innerText = OralAdmin_TabletDissolveTimeSliderValue;
  maxLabelSpan.innerText = "24";

  slider.min = "1";
  slider.max = "24";
  slider.step = "1";
  slider.value = OralAdmin_TabletDissolveTimeSliderValue;
}

function ConfigureOralAdmin_BioavailabilitySlider() {
  const container = document.getElementById('OralAdmin_BioavailabilitySlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Bioavailability (%)";
  minLabelSpan.innerText = "10";
  valueLabelSpan.innerText = OralAdmin_BioavailabilitySliderValue;
  maxLabelSpan.innerText = "100";

  slider.min = "10";
  slider.max = "100";
  slider.step = "1";
  slider.value = OralAdmin_BioavailabilitySliderValue;
}

function ConfigureOralAdmin_ClearanceSlider() {
  const container = document.getElementById('OralAdmin_ClearanceSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Clearance (ml/min)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = OralAdmin_ClearanceSliderValue;
  maxLabelSpan.innerText = "100";

  slider.min = "0";
  slider.max = "100";
  slider.step = "1";
  slider.value = OralAdmin_ClearanceSliderValue;
}

function UpdateOralAdminSliderValueLabels() {
  let container = document.getElementById('OralAdmin_TabletStrengthSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_TabletStrengthSliderValue = slider.value;

  container = document.getElementById('OralAdmin_TabletsPerAdminSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_TabletsPerAdminSliderValue = slider.value;

  container = document.getElementById('OralAdmin_AdminsPerDaySlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_AdminsPerDaySliderValue = slider.value;

  container = document.getElementById('OralAdmin_TabletDissolveTimeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_TabletDissolveTimeSliderValue = slider.value;

  container = document.getElementById('OralAdmin_BioavailabilitySlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_BioavailabilitySliderValue = slider.value;

  container = document.getElementById('OralAdmin_ClearanceSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_ClearanceSliderValue = slider.value;
}