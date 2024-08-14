class ConstantInfusion_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    let vd = "<msub><mtext>V</mtext><mtext>D</mtext></msub>"
    let thalf = "<msub><mtext>t</mtext><mtext>1/2</mtext></msub>"
    let space = "<mspace width='1ch'/>"

    this.id = "DescriptionContainer";
    this.innerHTML = `
    The effects of the constant rate infusion is modelled using a single compartment model, note that reality is often more complex.<br>
    Elimination of the drug is assumed to be of first order kinetics.<br>
    The volume of distribution (<math>${vd}</math>) is constant and set to 70 L.
    <br><br>
    Clearance is calculated using:<br><br>
    <math><mtext>CL =</mtext>${space}<mfrac><mrow><mtext>ln 2 *</mtext>${space}${vd}</mrow>${thalf}</math>
    <br>where<br>
    <math><mtext>CL</mtext></math> is the total clearance, <br>
    <math><mtext>ln</mtext></math> is the natural logarithm,<br>
    <math>${vd}</math> is the volume of distribution, and<br>
    <math>${thalf}</math> is the half life.
    `;    
  }
}
customElements.define('constant-infusion-description', ConstantInfusion_Description);