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

    <div class="ButtonContainer" id="ToggleFullScreenButton" onclick="ToggleFullScreen()">
      <span>Display full screen</span>
    </div>
        `;
  }
}
customElements.define('tab-panel', TabPanel);