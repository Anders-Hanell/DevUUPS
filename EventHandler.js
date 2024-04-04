function PageFinishedLoading() {
  let bodyHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
  let bodyWidth = screen.availWidth - (window.outerWidth - window.innerWidth);

  document.body.style.height = bodyHeight + "px";
  document.body.style.width = bodyWidth + "px";
  
  AdjustFontSize("MainTitlePanel", 0.95, 0.60);
  AdjustButtonTextSize();
  
  UpdateUserInterfaceComponents();
}

function UpdateUserInterfaceComponents() {
  UpdateSliderSize();
  UpdateSliderFontSizes();

  UpdateCheckboxSize();
  UpdateCheckboxFontSizes();
  
  UpdateRadioButtonSize();
  UpdateRadioButtonFontSizes();

  UpdateCurrentGraph();
}

function AdjustFontSize(containerId, maxWidthPercent, maxHeightPercent) {
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

function AdjustButtonTextSize() {
  AdjustFontSize("SingleDoseButton", 0.80, 0.60);
  AdjustFontSize("ConstantInfusionButton", 0.80, 0.60);
  AdjustFontSize("OralAdministrationButton", 0.80, 0.60);
  AdjustFontSize("TwoCompartmentButton", 0.80, 0.60);
  AdjustFontSize("AboutButton", 0.80, 0.60);

  AdjustFontSize("GraphButton", 0.80, 0.60);
  AdjustFontSize("ControlsButton", 0.80, 0.60);
  AdjustFontSize("BothButton", 0.80, 0.60);
  AdjustFontSize("DescriptionButton", 0.80, 0.60);
  AdjustFontSize("ToggleNavigationButton", 0.80, 0.60);
}

function OnWindowResize() {
  AdjustFontSize("MainTitlePanel", 0.95, 0.60);
  AdjustButtonTextSize();
  
  UpdateUserInterfaceComponents();
}

function CurrentModeIsFullScreen() {
  if (document.fullscreenElement != null) {
    return true;
  }

  if (screen.width - window.outerWidth <= 16 && screen.height - window.outerHeight <= 16) {
    return true;
  }

  return false;
}

function OnSidebarButtonClick(buttonId) {
  const conentContainer = document.getElementById("ContentContainer");
  
  if (buttonId == "SingleDoseButton") {
    CurrentModel = "SingleDose";
    SingleDose_AdminTypeSelection = "Oral";
    
    conentContainer.innerHTML = "<single-dose-both></single-dose-both>";
    
    AdjustButtonTextSize();
    
    UpdateUserInterfaceComponents();
  }

  if (buttonId == "ConstantInfusionButton") {
    CurrentModel = "ConstantInfusion";
    
    conentContainer.innerHTML = "<constant-infusion-both></constant-infusion-both>";
    
    AdjustButtonTextSize();
  
    UpdateUserInterfaceComponents();
  }

  if (buttonId == "OralAdministrationButton") {
    CurrentModel = "OralAdmin";
    
    conentContainer.innerHTML = "<oral-admin-both></oral-admin-both>";
    UpdateUserInterfaceComponents();
  }

  if (buttonId == "TwoCompartmentButton") {
    CurrentModel = "TwoCompartment";
    
    conentContainer.innerHTML = "<two-compartment-both></two-compartment-both>";
    
    UpdateUserInterfaceComponents();
  }

  if (buttonId == "AboutButton") {
    conentContainer.innerHTML = `
      Uppsala Univeristy Pharmacokinetic Simulator (UUPS) is intended for eduacation in pharmacokinetics.<br><br>
      It should not be used for clinical desicion making or research.<br><br>
      UUPS is free to use for everyone.<br><br>
      Created by Anders Hånell in 2022.<br><br>
    `;
  }
}

function ToggleNavigation() {
  const toggleButton = document.getElementById("ToggleNavigationButton");
  
  if (NavigationIsVisible) {
    toggleButton.textContent = "Show navigation";
    HideNavigation();
  }
  else {
    toggleButton.textContent = "Hide navigation";
    ShowNavigation();
  }

  NavigationIsVisible = !NavigationIsVisible;
}

function HideNavigation() {
  const titlePanel = document.getElementById("MainTitlePanel");
  titlePanel.style.display = "none";

  const sidebar = document.getElementById("Sidebar");
  sidebar.style.display = "none";

  const gridContainer = document.getElementById("GridContainer");
  gridContainer.style.gridTemplateRows = "0fr 10fr 90fr";
  gridContainer.style.gridTemplateColumns = "0fr 100fr";
}

function ShowNavigation() {
  const gridContainer = document.getElementById("GridContainer");
  gridContainer.style.gridTemplateRows = "10fr 10fr 80fr";
  gridContainer.style.gridTemplateColumns = "10fr 90fr";
  
  const titlePanel = document.getElementById("MainTitlePanel");
  titlePanel.style.display = "flex";

  const sidebar = document.getElementById("Sidebar");
  sidebar.style.display = "flex";
}

function FullScreenModeChanged() {
  UpdateCurrentGraph();
}

function OnGraphButtonClick() {
  CurrentTab = "Graph";
  
  let container = document.getElementById("ContentContainer");
  
  if (CurrentModel == "SingleDose") {
    container.innerHTML = "<single-dose-graph></single-dose-graph>"
    container.firstChild.style.height = "100%";
  }

  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-graph></constant-infusion-graph>"
    container.firstChild.style.height = "100%";
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-graph></oral-admin-graph>"
    container.firstChild.style.height = "100%";
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-graph></two-compartment-graph>"
    container.firstChild.style.height = "100%";
  }

  UpdateCurrentGraph();
}

function OnControlsButtonClick() {
  CurrentTab = "Controls";
  
  let container = document.getElementById("ContentContainer");
  
  if (CurrentModel == "SingleDose") {
    container.innerHTML = "<single-dose-controls></single-dose-controls>";
  }

  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-controls></constant-infusion-controls>";
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-controls></oral-admin-controls>"
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-controls></two-compartment-controls>"
  }

  container.firstChild.style.height = "100%";

  UpdateUserInterfaceComponents();
}

function OnBothButtonClick() {
  CurrentTab = "Both";

  let container = document.getElementById("ContentContainer");

  if (CurrentModel == "SingleDose") {
    container.innerHTML = "<single-dose-both></single-dose-both>";
  }

  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-both></constant-infusion-both>";
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-both></oral-admin-both>"
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-both></two-compartment-both>"
  }

  UpdateUserInterfaceComponents();
}

function OnDescriptionButtonClick() {
  CurrentTab = "Description";
  
  let container = document.getElementById("ContentContainer");
  
  if (CurrentModel == "SingleDose") {
    container.innerHTML = "<single-dose-description></single-dose-description>"
  }

  if (CurrentModel == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-description></constant-infusion-description>"
  }

  if (CurrentModel == "OralAdmin") {
    container.innerHTML = "<oral-admin-description></oral-admin-description>"
  }
  
  if (CurrentModel == "TwoCompartment") {
    container.innerHTML = "<two-compartment-description></two-compartment-description>"
  }
}

function OnCheckboxChange() {
  if (CurrentModel == "SingleDose") {
    SingleDose_OnCheckboxChange();
  }
  
  if (CurrentModel == "ConstantInfusion") {
    ConstantInfusion_OnCheckboxChange();
  }

  if (CurrentModel == "OralAdmin") {
    OralAdmin_OnCheckboxChange();
  }

  if (CurrentModel == "TwoCompartment") {
    TwoCompartment_OnCheckboxChange();
  }
}

function OnRadioButtonChange(buttonId) {
  if (buttonId == "A") {
    SingleDose_AdminTypeSelection = "Oral";
  }
  else if (buttonId == "B") {
    SingleDose_AdminTypeSelection = "IV";
  }

  SingleDose_UpdateGraph();
}