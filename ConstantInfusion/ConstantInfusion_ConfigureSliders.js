var ConstantInfusion_BolusDoseSliderValue = 0;
var ConstantInfusion_InfusionRateSliderValue = 75;
var ConstantInfusion_HalflifeSliderValue = 65;
var ConstantInfusion_InfusionTimeSliderValue = 750;

function ConfigureConstantInfusion_BolusDoseSlider() {
  const container = document.getElementById('ConstantInfusion_BolusDoseSlider');
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
  valueLabelSpan.innerText = ConstantInfusion_BolusDoseSliderValue;
  maxLabelSpan.innerText = "10000";

  slider.min = "0";
  slider.max = "10000";
  slider.step = "10";
  slider.value = ConstantInfusion_BolusDoseSliderValue;
}

function ConfigureConstantInfusion_InfusionRateSlider() {
  const container = document.getElementById('ConstantInfusion_InfusionRateSlider');
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
  valueLabelSpan.innerText = ConstantInfusion_InfusionRateSliderValue;
  maxLabelSpan.innerText = "100";

  slider.min = "0";
  slider.max = "100";
  slider.step = "1";
  slider.value = ConstantInfusion_InfusionRateSliderValue;
}

function ConfigureConstantInfusion_HalflifeSlider() {
  const container = document.getElementById('ConstantInfusion_HalflifeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Halflife (min)";
  minLabelSpan.innerText = "10";
  valueLabelSpan.innerText = ConstantInfusion_HalflifeSliderValue;
  maxLabelSpan.innerText = "200";

  slider.min = "10";
  slider.max = "200";
  slider.step = "1";
  slider.value = ConstantInfusion_HalflifeSliderValue
}

function ConfigureConstantInfusion_InfusionTimeSlider() {
  const container = document.getElementById('ConstantInfusion_InfusionTimeSlider');
  const slider = container.querySelector('.my-slider');
  const mainLabel = container.querySelector('.SliderMainLabel');
  const minLabel = container.querySelector('.SliderMinLabel');
  const valueLabel = container.querySelector('.SliderValueLabel');
  const maxLabel = container.querySelector('.SliderMaxLabel');

  const mainLabelSpan = mainLabel.querySelector('span');
  const minLabelSpan = minLabel.querySelector('span');
  const valueLabelSpan = valueLabel.querySelector('span');
  const maxLabelSpan = maxLabel.querySelector('span');

  mainLabelSpan.innerText = "Infusion time (min)";
  minLabelSpan.innerText = "0";
  valueLabelSpan.innerText = ConstantInfusion_InfusionTimeSliderValue;
  maxLabelSpan.innerText = "1000";

  slider.min = "0";
  slider.max = "1000";
  slider.step = "1";
  slider.value = ConstantInfusion_InfusionTimeSliderValue
}

function UpdateConstantInfusionSliderValueLabels() {
  let container = document.getElementById('ConstantInfusion_BolusDoseSlider');
  let slider = container.querySelector('.my-slider');
  let valueLabel = container.querySelector('.SliderValueLabel');
  let valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  ConstantInfusion_BolusDoseSliderValue = slider.value;
   
  container = document.getElementById('ConstantInfusion_InfusionRateSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  ConstantInfusion_InfusionRateSliderValue = slider.value;

  container = document.getElementById('ConstantInfusion_HalflifeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  ConstantInfusion_HalflifeSliderValue = slider.value;

  container = document.getElementById('ConstantInfusion_InfusionTimeSlider');
  slider = container.querySelector('.my-slider');
  valueLabel = container.querySelector('.SliderValueLabel');
  valueSpan = valueLabel.querySelector('span');
  valueSpan.innerText = slider.value;
  ConstantInfusion_InfusionTimeSliderValue = slider.value;
}