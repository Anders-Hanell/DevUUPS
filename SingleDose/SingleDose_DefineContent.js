class SingleDose_Both extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <single-dose-graph></single-dose-graph>
    <single-dose-controls></single-dose-controls>
    `;
  }
}
customElements.define('single-dose-both', SingleDose_Both);

class SingleDose_Graph extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  }
}
customElements.define('single-dose-graph', SingleDose_Graph);

class SingleDose_Controls extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.id = "ControlsContainer";
    this.innerHTML = `
    <div class="ControlPanelColumn">
      <radio-button-container id="SingleDose_AdminTypeRadioButtons"></radio-button-container>
      <slider-container id="SingleDose_DoseSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <slider-container id="SingleDose_HalflifeSlider"></slider-container>
      <slider-container id="SingleDose_TabletDissolveTimeSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "SingleDose_DisplayPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "SingleDose_LogPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "SingleDose_DisplayAbsorbtionRateCheckbox"></checkbox-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "SingleDose_DisplayCmaxCheckbox"></checkbox-container>
      <checkbox-container id = "SingleDose_DisplayTmaxCheckbox"></checkbox-container>
      <checkbox-container id = "SingleDose_DisplayAucCheckbox"></checkbox-container>
    </div>
    `;

    ConfigureSingleDose_DoseSlider();
    ConfigureSingleDose_HalflifeSlider();
    ConfigureSingleDose_TabletDissolveTimeSlider();

    ConfigureSingleDose_DisplayPlasmaConcentrationCheckbox();
    ConfigureSingleDose_LogPlasmaConcentrationCheckbox();
    ConfigureSingleDose_DisplayAbsorbtionRateCheckbox();

    ConfigureSingleDose_DisplayCmaxCheckbox();
    ConfigureSingleDose_DisplayTmaxCheckbox();
    ConfigureSingleDose_DisplayAucCheckbox();
  }
}
customElements.define('single-dose-controls', SingleDose_Controls);