class UpdateUI {
  static UpdateVisibleComponents() {
    if (GlobalState.NavigationIsVisible) {
      this.UpdateTitlePanelFontSize()
    }
  }

  static UpdateTitlePanelFontSize() {
    this.AdjustFontSize("MainTitlePanel", 0.95, 0.60);
  }

  static UpdateUserInterfaceComponents() {
    UpdateSliderSize();
    UpdateCheckboxSize();  
    UpdateRadioButtonSize();
  
    if (GlobalState.CurrentTab == "Both" | GlobalState.CurrentTab == "Graph") {
      UpdateCurrentGraph();
    }
  }

  static UpdateFontSizes() {
    this.AdjustTabBarButtonTextSize();
    UpdateSliderFontSizes();
    UpdateCheckboxFontSizes();
    UpdateRadioButtonFontSizes();
  }

  static AdjustTabBarButtonTextSize() {
    this.AdjustFontSize("GraphButton", 0.80, 0.60);
    this.AdjustFontSize("ControlsButton", 0.80, 0.60);
    this.AdjustFontSize("BothButton", 0.80, 0.60);
    this.AdjustFontSize("DescriptionButton", 0.80, 0.60);
    this.AdjustFontSize("ToggleNavigationButton", 0.80, 0.60);
  }

  static AdjustFontSizeForContainer(container, maxWidthPercent, maxHeightPercent) {
    const textSpan = container.querySelector('span');
  
    container.style.fontSize = "1px";
  
    let availableWidth = container.scrollWidth * maxWidthPercent;
    let availableHeight = container.scrollHeight * maxHeightPercent;
  
    let currentTextWidth = textSpan.scrollWidth;
    let currentTextHeigth = textSpan.scrollHeight;
  
    let widthScaling = availableWidth / currentTextWidth;
    let heightScaling = availableHeight / currentTextHeigth;
    let scaling = Math.min(widthScaling, heightScaling);
  
    container.style.fontSize = scaling + "px";
  }

  static AdjustFontSize(containerId, maxWidthPercent, maxHeightPercent) {
    const container = document.getElementById(containerId);
    const textSpan = container.querySelector('span');
  
    container.style.fontSize = "1px";
  
    let availableWidth = container.scrollWidth * maxWidthPercent;
    let availableHeight = container.scrollHeight * maxHeightPercent;
  
    let currentTextWidth = textSpan.scrollWidth;
    let currentTextHeigth = textSpan.scrollHeight;
  
    let widthScaling = availableWidth / currentTextWidth;
    let heightScaling = availableHeight / currentTextHeigth;
    let scaling = Math.min(widthScaling, heightScaling);
  
    container.style.fontSize = scaling + "px";
  }

  static SetMainContainerStyleForVisibleNavigation() {
    const mainContainer = document.getElementById("MainContainer");
    
    mainContainer.style.gridTemplateRows = "10fr 10fr 80fr";
    mainContainer.style.gridTemplateColumns = "10fr 90fr";
  }
  
  static SetMainContainerStyleForHiddendNavigation() {
    const mainContainer = document.getElementById("MainContainer");
    
    mainContainer.style.gridTemplateRows = "0fr 10fr 90fr";
    mainContainer.style.gridTemplateColumns = "0fr 100fr";
  }

  static InitializeAllElements() {
    InitializeLeftSideBarStyle()
  }

  static HideNavigation() {
    const titlePanel = document.getElementById("MainTitlePanel");
    titlePanel.style.display = "none";
    
    HideLeftSideBar();
    
    UpdateUI.SetMainContainerStyleForHiddendNavigation();
  }
  
  static ShowNavigation() {
    UpdateUI.SetMainContainerStyleForVisibleNavigation();
      
    const titlePanel = document.getElementById("MainTitlePanel");
    titlePanel.style.display = "flex";
  
    DisplayLeftSideBar();
  }
}