function PageFinishedLoading() {
  let bodyHeight = screen.availHeight - (window.outerHeight - window.innerHeight);
  let bodyWidth = screen.availWidth - (window.outerWidth - window.innerWidth);

  document.body.style.height = bodyHeight + "px";
  document.body.style.width = bodyWidth + "px";
  
  const sideButtonsContainer = document.getElementById("SideButtons");
  SidebarButtonController.InitializeButtons(sideButtonsContainer)

  UpdateUI.InitializeAllElements();

  UpdateUI.UpdateVisibleComponents()
  
  UpdateUI.UpdateUserInterfaceComponents();

  SidebarButtonController.MaximizeButtonLabels()

  UpdateUI.UpdateFontSizes();
}

function OnButtonClick(buttonId) {
  SidebarButtonController.OnSidebarButtonClick(buttonId)
}

function OnWindowResize() {}

function ToggleNavigation() {
  if (GlobalState.NavigationIsVisible) {
    UpdateUI.HideNavigation();
  }
  else {
    UpdateUI.ShowNavigation();
  }

  GlobalState.NavigationIsVisible = !GlobalState.NavigationIsVisible;

  UpdateUI.UpdateVisibleComponents()
}

function OnGraphButtonClick() {
  GlobalState.CurrentTab = "Graph";
  
  let container = document.getElementById("ContentContainer");
  
  if (GlobalState.CurrentPage == "SingleDose") {
    container.innerHTML = "<single-dose-graph></single-dose-graph>"
    container.firstChild.style.height = "100%";
  }

  if (GlobalState.CurrentPage == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-graph></constant-infusion-graph>"
    container.firstChild.style.height = "100%";
  }

  if (GlobalState.CurrentPage == "OralAdmin") {
    container.innerHTML = "<oral-admin-graph></oral-admin-graph>"
    container.firstChild.style.height = "100%";
  }
  
  if (GlobalState.CurrentPage == "TwoCompartment") {
    container.innerHTML = "<two-compartment-graph></two-compartment-graph>"
    container.firstChild.style.height = "100%";
  }

  UpdateCurrentGraph();
}

function OnControlsButtonClick() {
  GlobalState.CurrentTab = "Controls";
  
  let container = document.getElementById("ContentContainer");
  
  if (GlobalState.CurrentPage == "SingleDose") {
    container.innerHTML = "<single-dose-controls></single-dose-controls>";
  }

  if (GlobalState.CurrentPage == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-controls></constant-infusion-controls>";
  }

  if (GlobalState.CurrentPage == "OralAdmin") {
    container.innerHTML = "<oral-admin-controls></oral-admin-controls>"
  }
  
  if (GlobalState.CurrentPage == "TwoCompartment") {
    container.innerHTML = "<two-compartment-controls></two-compartment-controls>"
  }

  container.firstChild.style.height = "100%";

  UpdateUI.UpdateUserInterfaceComponents();
  UpdateUI.UpdateFontSizes();
}

function OnBothButtonClick() {
  GlobalState.CurrentTab = "Both";

  let container = document.getElementById("ContentContainer");

  if (GlobalState.CurrentPage == "SingleDose") {
    container.innerHTML = "<single-dose-both></single-dose-both>";
  }

  if (GlobalState.CurrentPage == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-both></constant-infusion-both>";
  }

  if (GlobalState.CurrentPage == "OralAdmin") {
    container.innerHTML = "<oral-admin-both></oral-admin-both>"
  }
  
  if (GlobalState.CurrentPage == "TwoCompartment") {
    container.innerHTML = "<two-compartment-both></two-compartment-both>"
  }

  UpdateUI.UpdateUserInterfaceComponents();
  UpdateUI.UpdateFontSizes();
}

function OnDescriptionButtonClick() {
  GlobalState.CurrentTab = "Description";
  
  let container = document.getElementById("ContentContainer");
  
  if (GlobalState.CurrentPage == "SingleDose") {
    container.innerHTML = "<single-dose-description></single-dose-description>"
  }

  if (GlobalState.CurrentPage == "ConstantInfusion") {
    container.innerHTML = "<constant-infusion-description></constant-infusion-description>"
  }

  if (GlobalState.CurrentPage == "OralAdmin") {
    container.innerHTML = "<oral-admin-description></oral-admin-description>"
  }
  
  if (GlobalState.CurrentPage == "TwoCompartment") {
    container.innerHTML = "<two-compartment-description></two-compartment-description>"
  }

  UpdateUI.UpdateUserInterfaceComponents();
  UpdateUI.UpdateFontSizes();
}

function OnCheckboxChange() {
  if (GlobalState.CurrentPage == "SingleDose") {
    SingleDose_OnCheckboxChange();
  }
  
  if (GlobalState.CurrentPage == "ConstantInfusion") {
    ConstantInfusion_OnCheckboxChange();
  }

  if (GlobalState.CurrentPage == "OralAdmin") {
    OralAdmin_OnCheckboxChange();
  }

  if (GlobalState.CurrentPage == "TwoCompartment") {
    TwoCompartment_OnCheckboxChange();
  }
}

function OnRadioButtonChange(buttonId) {
  if (buttonId == "A") {
    GlobalState.SingleDose_AdminTypeSelection = "Oral";
  }
  else if (buttonId == "B") {
    GlobalState.SingleDose_AdminTypeSelection = "IV";
  }

  if (GlobalState.CurrentTab == "Both") {
    SingleDose_UpdateGraph();
  }
}