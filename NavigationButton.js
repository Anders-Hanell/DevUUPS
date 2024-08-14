class NavigationButton {
  id
  htmlDiv
  htmlSpan
  
  constructor(id, label) { 
    NavigationButton.ButtonMap.set(id, this)
    
    this.id = id
        
    this.htmlDiv = new HtmlDiv(id, "CustomButton")
    this.htmlSpan = new HtmlTextSpan(id, "CustomButton", label)

    this.htmlDiv.AttachChildElement(this.htmlSpan.htmlElement)

    this.htmlDiv.SetOnMouseOverEvent(NavigationButton.OnMouseOver)
    this.htmlDiv.SetOnMouseLeaveEvent(NavigationButton.OnMouseLeave)
    this.htmlDiv.SetOnClick(NavigationButton.OnClick)

    this.htmlDiv.htmlElement.style.width = "100%"
    this.htmlDiv.htmlElement.style.height = "100%"
    
    this.htmlDiv.SetBackgroundColor(ColorAssignments.NavigationButtonBackgroundColor_Default)
    this.htmlDiv.SetCornerRadius("10px")
    this.htmlDiv.SetMargin_Bottom("15px")

    this.htmlSpan.SetFontSize(10)
    this.htmlSpan.SetTextColor(ColorAssignments.NavigationButtonTextColor)
    
    this.ClearMouseHoverStyle()

    this.htmlDiv.SetGridDisplay()
    this.htmlSpan.SetGridDisplay()

    this.htmlSpan.htmlElement.style.textAlign = "center"
  }

  DetermineMaxFontSize() {
    let currentFontSize = this.htmlSpan.GetFontSize()
    
    let currentSpanWidth = this.htmlSpan.GetWidth()
    let currentSpanHeight = this.htmlSpan.GetHeight()
    
    let currentDivWidth = this.htmlDiv.GetWidth()
    let currentDivHeight = this.htmlDiv.GetHeight()

    let availableWidth = 0.9 * currentDivWidth
    let availableHeight = 0.9 * currentDivHeight

    let adjustFactor = Math.min(availableWidth/currentSpanWidth, availableHeight/currentSpanHeight)

    let maxFontSize = currentFontSize * adjustFactor

    return maxFontSize
  }

  SetFontSize(fontSize) {
    this.htmlSpan.SetFontSize(fontSize + 'px')
  }

  SetMouseHoverStyle() {
    this.htmlDiv.SetBorderColor("white")
  }

  ClearMouseHoverStyle() {
    let currentBackgroundColor = this.htmlDiv.GetBackgroundColor()
    this.htmlDiv.SetBorderColor(currentBackgroundColor)
  }

  SetSelectedStyleForStartup() {
    this.htmlDiv.SetBackgroundColor(ColorAssignments.NavigationButtonBackgroundColor_Selected)
    this.htmlDiv.SetBorderColor(ColorAssignments.NavigationButtonBackgroundColor_Selected)
  }

  SetSelectedStyle() {
    this.htmlDiv.SetBackgroundColor(ColorAssignments.NavigationButtonBackgroundColor_Selected)
    this.htmlDiv.SetBorderColor("white")
  }

  SetDefaultStyle() {
    this.htmlDiv.SetBackgroundColor(ColorAssignments.NavigationButtonBackgroundColor_Default)
  }

  AppendToParentContainer(parent) {
    parent.appendChild(this.htmlDiv.htmlElement);
  }

  static ButtonMap = new Map()

  static OnMouseOver(mouseEvent) {
    let currentId = mouseEvent.srcElement.id
    let currentButton = NavigationButton.ButtonMap.get(currentId)
    currentButton.SetMouseHoverStyle()
  }
  
  static OnMouseLeave(mouseEvent) {
    let currentId = mouseEvent.srcElement.id
    let currentButton = NavigationButton.ButtonMap.get(currentId)
    currentButton.ClearMouseHoverStyle()
  }

  static OnClick(mouseEvent) {
    for (const button of NavigationButton.ButtonMap.values()) {
      button.SetDefaultStyle()
      button.ClearMouseHoverStyle()
    }
    
    let currentId = mouseEvent.srcElement.id
    let currentButton = NavigationButton.ButtonMap.get(currentId)
    currentButton.SetSelectedStyle()

    OnButtonClick(currentId)
  }
}