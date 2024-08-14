class TwoCompartment_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    Two compartment model using a bolus dose and constant rate infusion.<br>

    Both the bolus dose and the infusion is delivered to the central compartment.<br>

    Elimination of the drug is also considered to take place exclusively from the central compartment.
    `;
  }
}
customElements.define('two-compartment-description', TwoCompartment_Description);