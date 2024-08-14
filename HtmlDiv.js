class HtmlDiv {
  htmlElement
  divId
  divClass
  
  constructor(divId, divClass) { 
    this.htmlElement = document.createElement('div');
    this.divId = divId;
    this.divClass = divClass;

    this.htmlElement.id = divId;
    this.htmlElement.class = divClass;
  }

  AttachChildElement(child) {
    this.htmlElement.appendChild(child)
  }

  SetBackgroundColor(color) {
    this.htmlElement.style.backgroundColor = color
  }

  GetBackgroundColor() {
    return this.htmlElement.style.backgroundColor
  }

  SetCornerRadius(radius) {
    this.htmlElement.style.borderRadius = radius
  }

  SetBorderColor(color) {
    this.htmlElement.style.border = "5px"
    this.htmlElement.style.borderColor = color
    this.htmlElement.style.borderStyle = "solid"

  }

  SetMargin_Bottom(margin) {
    this.htmlElement.style.marginBottom = margin
  }

  GetWidth() {
    return this.htmlElement.scrollWidth
  }

  GetHeight() {
    return this.htmlElement.scrollHeight
  }

  SetGridDisplay() {
    this.htmlElement.style.display = "grid"
    this.htmlElement.style.justifyContent = "center"
    this.htmlElement.style.alignItems = "center"
    this.htmlElement.style.placeItems = "center"
  }

  SetFlexHorizontalCentering() {
    this.htmlElement.style.justifyContent = "space-evenly"
  }

  SetOnMouseOverEvent(handler) {
    this.htmlElement.onmouseover = handler
  }

  SetOnMouseLeaveEvent(handler) {
    this.htmlElement.onmouseleave = handler
  }

  SetOnClick(handler) {
    this.htmlElement.onclick = handler
  }
}