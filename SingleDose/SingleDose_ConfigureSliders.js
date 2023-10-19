var SingleDose_DoseSliderValue = 800;
var SingleDose_HalflifeSliderValue = 200;
var SingleDose_TabletDissolveTimeSliderValue = 60;

function ConfigureSingleDose_DoseSlider() {
  const container = document.getElementById('SingleDose_DoseSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Dose (mg)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = SingleDose_DoseSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "10";
  slider.value = SingleDose_DoseSliderValue;
}

function ConfigureSingleDose_HalflifeSlider() {
  const container = document.getElementById('SingleDose_HalflifeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Halflife (minutes)";
  minLabelSpan.innerText = "10";
  valueLabelSpan.innerText = SingleDose_HalflifeSliderValue;
  maxLabelSpan.innerText = "300";

  slider.min = "10";
  slider.max = "300";
  slider.step = "1";
  slider.value = SingleDose_HalflifeSliderValue;
}

function ConfigureSingleDose_TabletDissolveTimeSlider() {
  const container = document.getElementById('SingleDose_TabletDissolveTimeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Tablet dissolve time (minutes)";
  minLabelSpan.innerText = "10";
  valueLabelSpan.innerText = SingleDose_TabletDissolveTimeSliderValue;
  maxLabelSpan.innerText = "300";

  slider.min = "10";
  slider.max = "300";
  slider.step = "1";
  slider.value = SingleDose_TabletDissolveTimeSliderValue;
}

function UpdateSingleDoseSliderValueLabels() {
  let container = document.getElementById('SingleDose_DoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  SingleDose_DoseSliderValue = slider.value;

  container = document.getElementById('SingleDose_HalflifeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  SingleDose_HalflifeSliderValue = slider.value;

  container = document.getElementById('SingleDose_TabletDissolveTimeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  SingleDose_TabletDissolveTimeSliderValue = slider.value;
}