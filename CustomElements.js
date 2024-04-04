class SliderContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <p class="SliderMainLabel"><span>The slider</span></p>
        <span class="InputRangeContainer"><input class="my-slider" name="weight" type="range" oninput="OnNewSliderValue()"></span>
        <div class="SliderValueContainer">
          <p class="SliderMinLabel"><span>Min</span></p>
          <p class="SliderValueLabel"><span>Value</span></p>
          <p class="SliderMaxLabel"><span>Max</span></p>
        </div>
        `;
  }
}
customElements.define('slider-container', SliderContainer);

class CheckboxContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <input type="checkbox" oninput="OnCheckboxChange()" checked>
        <p><span>The Checkbox</span></p>
        `;
  }
}
customElements.define('checkbox-container', CheckboxContainer);

class RadioButtonContainer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <input type="radio" name='AdminType' id="ButtonA" oninput="OnRadioButtonChange('A')" checked>
        <p><span id="LabelA">Oral</span></p>
        <input type="radio" name='AdminType' id="ButtonB" oninput="OnRadioButtonChange('B')">
        <p><span id="LabelB">IV</span></p>
        `;
  }
}
customElements.define('radio-button-container', RadioButtonContainer);

class TabPanel extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <div class="ButtonContainer" id="GraphButton" onclick="OnGraphButtonClick()">
      <span>Graph</span>
    </div>

    <div class="ButtonContainer" id="ControlsButton" onclick="OnControlsButtonClick()">
      <span>Controls</span>
    </div>

    <div class="ButtonContainer" id="BothButton" onclick="OnBothButtonClick()">
      <span>Both</span>
    </div>

    <div class="ButtonContainer" id="DescriptionButton" onclick="OnDescriptionButtonClick()">
      <span>Description</span>
    </div>
    
    <div class="ButtonContainer" id="ToggleNavigationButton" onclick="ToggleNavigation()">
      <span>Hide navigation</span>
    </div>
    `;
  }
}
customElements.define('tab-panel', TabPanel);