class SingleDose_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    This model simulates the administration of a single dose.
    <br><br>
    The administration can be either intravenous or oral.
    For oral administration the tablet is modeled as a sphere with even distribuiton of the drug.<br>
    In the model the radius of the tablet decreases linearly with time as the tablet dissolves.<br>
    Release will thus be higher at first, when the surface area is large, and slower towards the end.
    <br><br>
    Drug released from the tablet is modelled to be instantaneously absorbed.
    <br><br>
    Drug elimination is modelled to occur by first order kinetics.
    <br><br>
    The entire body except for the gastro-intestinal tract is treated as a single compartment.
    `;

    MathJax.typeset();
  }
}
customElements.define('single-dose-description', SingleDose_Description);