class TwoCompartment_Both extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <two-compartment-graph></two-compartment-graph>
    <two-compartment-controls></two-compartment-controls>
    `;
  }
}
customElements.define('two-compartment-both', TwoCompartment_Both);

class TwoCompartment_Graph extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  }
}
customElements.define('two-compartment-graph', TwoCompartment_Graph);

class TwoCompartment_Controls extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.id = "ControlsContainer";
    this.innerHTML = `
    <div class="ControlPanelColumn">
      <slider-container id="TwoCompartment_BolusDoseSlider"></slider-container>
      <slider-container id="TwoCompartment_InfusionRateSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "TwoCompartment_DisplayPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "TwoCompartment_LogPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "TwoCompartment_DisplayPeripheralConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "TwoCompartment_LogPeripheralConcentrationCheckbox"></checkbox-container>
    </div>
    `;

    ConfigureTwoCompartment_BolusDoseSlider();
    ConfigureTwoCompartment_InfusionRateSlider();

    ConfigureTwoCompartment_DisplayPlasmaConcentrationCheckbox();
    ConfigureTwoCompartment_LogPlasmaConcentrationCheckbox();
    ConfigureTwoCompartment_DisplayPeripheralConcentrationCheckbox();
    ConfigureTwoCompartment_LogPeripheralConcentrationCheckbox();
  }
}
customElements.define('two-compartment-controls', TwoCompartment_Controls);