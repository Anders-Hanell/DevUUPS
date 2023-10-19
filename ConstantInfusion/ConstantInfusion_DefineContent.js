class ConstantInfusion_Controls extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.id = "ControlsContainer";
    this.innerHTML = `
    <div class="ControlPanelColumn">
      <slider-container id="ConstantInfusion_BolusDoseSlider"></slider-container>
      <slider-container id="ConstantInfusion_InfusionRateSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <slider-container id="ConstantInfusion_HalflifeSlider"></slider-container>
      <slider-container id="ConstantInfusion_InfusionTimeSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "ConstantInfusion_DisplayPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "ConstantInfusion_DisplayInfusionRateCheckbox"></checkbox-container>
      <checkbox-container id = "ConstantInfusion_DisplayEliminationRateCheckbox"></checkbox-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "ConstantInfusion_DisplayHalflifeMarkerCheckbox"></checkbox-container>
      <checkbox-container id = "ConstantInfusion_DisplayClearanceCheckbox"></checkbox-container>
      <checkbox-container id = "ConstantInfusion_DisplayTherapeuticWindowCheckbox"></checkbox-container>
    </div>
    `;

    ConfigureConstantInfusion_BolusDoseSlider();
    ConfigureConstantInfusion_InfusionRateSlider();
    ConfigureConstantInfusion_HalflifeSlider();
    ConfigureConstantInfusion_InfusionTimeSlider();

    ConfigureConstantInfusion_DisplayPlasmaConcentrationCheckbox();
    ConfigureConstantInfusion_DisplayInfusionRateCheckbox();
    ConfigureConstantInfusion_DisplayEliminationRateCheckbox();
    
    ConfigureConstantInfusion_DisplayHalflifeMarkerCheckbox();
    ConfigureConstantInfusion_DisplayClearanceCheckbox();
    ConfigureConstantInfusion_DisplayTherapeuticWindowCheckbox();
  }
}
customElements.define('constant-infusion-controls', ConstantInfusion_Controls);

class ConstantInfusion_Graph extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  }
}
customElements.define('constant-infusion-graph', ConstantInfusion_Graph);

class ConstantInfusion_Both extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <constant-infusion-graph></constant-infusion-graph>
    <constant-infusion-controls></constant-infusion-controls>
    `;
  }
}
customElements.define('constant-infusion-both', ConstantInfusion_Both);