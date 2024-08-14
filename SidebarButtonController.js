class SidebarButtonController {
  
  static InitializeButtons(parent) {
    let customButtom = new NavigationButton("single_dose", "Single\ndose")
    customButtom.SetSelectedStyleForStartup()
    customButtom.AppendToParentContainer(parent)

    let customButtom2 = new NavigationButton("constant_infusion", "Constant\ninfusion")
    customButtom2.AppendToParentContainer(parent)

    let customButtom3 = new NavigationButton("oral_administration", "Oral\nadministration")
    customButtom3.AppendToParentContainer(parent)

    let customButtom4 = new NavigationButton("two_compartments", "Two\ncompartments")
    customButtom4.AppendToParentContainer(parent)

    let customButtom5 = new NavigationButton("about", "About")
    customButtom5.AppendToParentContainer(parent)
  }

  static MaximizeButtonLabels() {
    let sharedFontSize = 1000

    for (const button of NavigationButton.ButtonMap.values()) {
      let maxFontSize = button.DetermineMaxFontSize()

      if (maxFontSize < sharedFontSize) {
        sharedFontSize = maxFontSize
      }
    }

    for (const button of NavigationButton.ButtonMap.values()) {
      button.SetFontSize(sharedFontSize)
    }
  }

  static OnSidebarButtonClick(buttonId) {
    const conentContainer = document.getElementById("ContentContainer");
  
    if (buttonId == "single_dose") {
      GlobalState.CurrentTab = "Both";
      GlobalState.CurrentPage = "SingleDose";
    
      conentContainer.innerHTML = "<single-dose-both></single-dose-both>";
    
      UpdateUI.AdjustTabBarButtonTextSize();
      UpdateUI.UpdateUserInterfaceComponents();
      UpdateUI.UpdateFontSizes();
    }

    if (buttonId == "constant_infusion") {
      GlobalState.CurrentTab = "Both";
      GlobalState.CurrentPage = "ConstantInfusion";
    
      conentContainer.innerHTML = "<constant-infusion-both></constant-infusion-both>";
    
      UpdateUI.AdjustTabBarButtonTextSize();
      UpdateUI.UpdateUserInterfaceComponents();
      UpdateUI.UpdateFontSizes();
    }

    if (buttonId == "oral_administration") {
      GlobalState.CurrentTab = "Both";
      GlobalState.CurrentPage = "OralAdmin";
    
      conentContainer.innerHTML = "<oral-admin-both></oral-admin-both>";

      UpdateUI.AdjustTabBarButtonTextSize();
      UpdateUI.UpdateUserInterfaceComponents();
      UpdateUI.UpdateFontSizes();
    }

    if (buttonId == "two_compartments") {
      GlobalState.CurrentTab = "Both";
      GlobalState.CurrentPage = "TwoCompartment";
    
      conentContainer.innerHTML = "<two-compartment-both></two-compartment-both>";
      
      UpdateUI.AdjustTabBarButtonTextSize();
      UpdateUI.UpdateUserInterfaceComponents();
      UpdateUI.UpdateFontSizes();
    }

    if (buttonId == "about") {
      GlobalState.CurrentPage = "About"
      
      conentContainer.innerHTML = `
        Uppsala Univeristy Pharmacokinetic Simulator (UUPS) is intended for eduacation in pharmacokinetics.<br><br>
        It should not be used for clinical desicion making or research.<br><br>
        UUPS is free to use for everyone.<br><br>
        Created by Anders Hånell in 2022.<br><br>
      `;
    }
  }
}