class HtmlTextSpan {
  htmlElement
  spanId
  spanClass
  textNode
  
  constructor(spanId, spanClass, text) { 
    this.htmlElement = document.createElement('span')
    this.spanId = spanId
    this.spanClass = spanClass

    this.htmlElement.id = spanId
    this.htmlElement.class = spanClass
    
    this.htmlElement.style.cursor = "default"

    this.textNode = document.createTextNode(text);
    this.htmlElement.appendChild(this.textNode);
    this.htmlElement.style.whiteSpace = "pre"
  }

  UpdateLabel(text) {
    this.htmlElement.innerText = text
  }

  SetFontSize(fontSize) {
    this.htmlElement.style.fontSize = fontSize
  }

  SetGridDisplay() {
    this.htmlElement.style.display = "grid"
    this.htmlElement.style.justifyContent = "center"
    this.htmlElement.style.alignItems = "center"
    this.htmlElement.style.placeItems = "center"
  }

  GetFontSize() {
    let fs = window.getComputedStyle(this.htmlElement).fontSize
    fs = fs.replace('px', '')

    return fs
  }

  GetWidth() {
    return this.htmlElement.getBoundingClientRect().width
  }

  GetHeight() {    
    return this.htmlElement.getBoundingClientRect().height
  }

  SetTextColor(color) {
    this.htmlElement.style.color = color
  }
}