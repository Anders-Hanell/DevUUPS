var TwoCompartment_BolusDoseSliderValue = 400;
var TwoCompartment_InfusionRateSliderValue = 0.0;

function ConfigureTwoCompartment_BolusDoseSlider() {
  const container = document.getElementById('TwoCompartment_BolusDoseSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Bolus dose (mg)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = TwoCompartment_BolusDoseSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "10";
  slider.value = TwoCompartment_BolusDoseSliderValue;
}

function ConfigureTwoCompartment_InfusionRateSlider() {
  const container = document.getElementById('TwoCompartment_InfusionRateSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Infusion rate (mg/min)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = TwoCompartment_InfusionRateSliderValue;
  maxLabelSpan.innerText = "10";

  slider.min = "0.0";
  slider.max = "10.0";
  slider.step = "0.1";
  slider.value = TwoCompartment_InfusionRateSliderValue;
}

function UpdateTwoCompartmentSliderValueLabels() {
  let container = document.getElementById('TwoCompartment_BolusDoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  TwoCompartment_BolusDoseSliderValue = slider.value * 1.0;
   
  container = document.getElementById('TwoCompartment_InfusionRateSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  TwoCompartment_InfusionRateSliderValue = slider.value * 1.0;
}