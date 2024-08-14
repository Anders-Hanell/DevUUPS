function InitializeLeftSideBarStyle() {
  const leftSideBar = document.getElementById("Sidebar");

  leftSideBar.style.gridColumn = "1 / 2"
  leftSideBar.style.gridRow = "2 / 4"

  leftSideBar.style.borderRadius = "10px"

  leftSideBar.style.display = "grid"
  leftSideBar.style.gridTemplateColumns = "100%"
  leftSideBar.style.gridTemplateRows = "80% 20%"

  leftSideBar.style.marginRight = "1vh"
  leftSideBar.style.marginBottom = "1vh"
  leftSideBar.style.padding = "15px"
  leftSideBar.style.paddingBottom = "0px"

  const logo = document.getElementById("SideLogo");

  logo.style.height = "100%"
  logo.style.width = "100%"

  logo.style.gridColumn = "1 / 2"
  logo.style.gridRow = "2 / 3"

  const buttonContainers = leftSideBar.querySelectorAll(".ButtonContainer")
  
  for (var i = 0; i<buttonContainers.length; i++) {
    const buttonContainer = buttonContainers[i];
    const span = buttonContainer.querySelector('span');    
    span.style.textAlign = "center";

    buttonContainer.style.height = "20%"
    buttonContainer.style.width = "100%"
    buttonContainer.style.display = "flex"
    buttonContainer.style.justifyContent = "space-around"
    buttonContainer.style.alignItems = "center"
    buttonContainer.style.marginBottom = "15px"
    buttonContainer.style.whiteSpace = "nowrap"
    buttonContainer.style.borderRadius = "10px"
    buttonContainer.style.fontSize = "1px"
  }

  const sideButtonsContainer = document.getElementById("SideButtons");

  sideButtonsContainer.style.height = "100%"
  sideButtonsContainer.style.width = "100%"
  sideButtonsContainer.style.gridColumn = "1 / 2"
  sideButtonsContainer.style.gridRow = "1 / 2"

  sideButtonsContainer.style.display = "flex"
  sideButtonsContainer.style.flexDirection = "column"
  sideButtonsContainer.style.alignItems = "center"
  sideButtonsContainer.style.justifyContent = "flex-start"
}

function DisplayLeftSideBar() {
  const sidebar = document.getElementById("Sidebar");
  sidebar.style.display = "grid";
}

function HideLeftSideBar() {
  const sidebar = document.getElementById("Sidebar");
  sidebar.style.display = "none";
}