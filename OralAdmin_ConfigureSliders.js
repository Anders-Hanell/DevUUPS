var OralAdmin_DailyDoseSliderSliderValue = 100;
var OralAdmin_TabletsPerDaySliderValue = 2;
var OralAdmin_TabletDissolveTimeSliderValue = 4;
var OralAdmin_BioavailabilitySliderValue = 50;

function ConfigureOralAdmin_DailyDoseSlider() {
  const container = document.getElementById('OralAdmin_DailyDoseSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Daily dose (mg)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = OralAdmin_DailyDoseSliderSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "10";
  slider.value = OralAdmin_DailyDoseSliderSliderValue;
}

function ConfigureOralAdmin_TabletsPerDaySlider() {
  const container = document.getElementById('OralAdmin_TabletsPerDaySlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Tablets per day";
  minLabelSpan.innerText = "1";
  valueLabelSpan.innerText = OralAdmin_TabletsPerDaySliderValue;
  maxLabelSpan.innerText = "6";

  slider.min = "1";
  slider.max = "6";
  slider.step = "1";
  slider.value = OralAdmin_TabletsPerDaySliderValue;
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

function UpdateOralAdminSliderValueLabels() {
  let container = document.getElementById('OralAdmin_DailyDoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_DailyDoseSliderSliderValue = slider.value;

  container = document.getElementById('OralAdmin_TabletsPerDaySlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  OralAdmin_TabletsPerDaySliderValue = slider.value;

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
}