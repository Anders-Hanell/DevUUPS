class ConstantInfusion_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    The effects of the constant rate infusion is modelled using a single compartment model, note that reality is often more complex.<br>
    Elimination of the drug is assumed to be of first order kinetics.<br>
    The volume of distribution (\\(V_D\\)) is constant and set to 70 L.
    <br><br>
    Clearance is calculated using:<br>
    \\[CL = \\frac{\\text{ln 2} * V_D}{t_{1/2}} \\]
    where<br>
    \\(CL\\) is the total clearance, <br>
    \\(\\text{ln}\\) is the natural logarithm,<br>
    \\(V_D\\) is the volume of distribution, and<br>
    \\(t_{1/2}\\) is the half life.
    `;

    MathJax.typeset();
  }
}
customElements.define('constant-infusion-description', ConstantInfusion_Description);