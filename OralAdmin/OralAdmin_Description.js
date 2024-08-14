class OralAdmin_Description extends HTMLElement {
  constructor() { super(); }

  connectedCallback() {
    this.id = "DescriptionContainer";
    this.innerHTML = `
    This model simulates repeated oral administration.
    <br><br>
    The tablet is modeled as a sphere with even distribuiton of the drug.<br>
    In the model the radius of the tablet decreases linearly with time as the tablet dissolves.<br>
    Release will thus be higher at first, when the surface area is large, and slower towards the end.<br>
    Note that the total release rate can be the combination of several tablets, depending on the settings of the model.
    <br><br>
    Drug released from the tablet is modelled to be instantaneously absorbed, but modified by the bioavailability.
    <br><br>
    Drug elimination is modelled to occur by first order kinetics.
    <br><br>
    The entire body except for the gastro-intestinal tract is treated as a single compartment.
    `;
  }
}
customElements.define('oral-admin-description', OralAdmin_Description);