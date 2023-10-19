class OralAdmin_Both extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.innerHTML = `
    <oral-admin-graph></oral-admin-graph>
    <oral-admin-controls></oral-admin-controls>
    `;
  }
}
customElements.define('oral-admin-both', OralAdmin_Both);

class OralAdmin_Graph extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.innerHTML = `
      <canvas id="canvas"></canvas>
    `;
  }
}
customElements.define('oral-admin-graph', OralAdmin_Graph);

class OralAdmin_Controls extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.className = "Container";
    this.id = "ControlsContainer";
    this.innerHTML = `
    <div class="ControlPanelColumn">
      <slider-container id="OralAdmin_TabletStrengthSlider"></slider-container>
      <slider-container id="OralAdmin_TabletsPerAdminSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <slider-container id="OralAdmin_AdminsPerDaySlider"></slider-container>
      <slider-container id="OralAdmin_TabletDissolveTimeSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <slider-container id="OralAdmin_BioavailabilitySlider"></slider-container>
      <slider-container id="OralAdmin_ClearanceSlider"></slider-container>
    </div>
    <div class="ControlPanelColumn">
      <checkbox-container id = "OralAdmin_DisplayPlasmaConcentrationCheckbox"></checkbox-container>
      <checkbox-container id = "OralAdmin_DisplayReleaseRateCheckbox"></checkbox-container>
      <checkbox-container id = "OralAdmin_DisplayAbsorbtionRateCheckbox"></checkbox-container>
    </div>
    `;

    ConfigureOralAdmin_TabletStrengthSlider();
    ConfigureOralAdmin_TabletsPerAdminSlider();

    ConfigureOralAdmin_AdminsPerDaySlider();
    ConfigureOralAdmin_TabletDissolveTimeSlider();

    ConfigureOralAdmin_BioavailabilitySlider();
    ConfigureOralAdmin_ClearanceSlider();

    ConfigureOralAdmin_DisplayPlasmaConcentrationCheckbox();
    ConfigureOralAdmin_DisplayReleaseRateCheckbox();
    ConfigureOralAdmin_DisplayAbsorbtionRateCheckbox();
  }
}
customElements.define('oral-admin-controls', OralAdmin_Controls);