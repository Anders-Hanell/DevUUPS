function UpdateCheckboxFontSizes() {
  const checkboxContainers = document.querySelectorAll('checkbox-container');

  for (var i = 0; i<checkboxContainers.length; i++) {
    const checkbox = checkboxContainers[i];
    const label = checkbox.querySelector('p');
    UpdateUI.AdjustFontSizeForContainer(label, 0.95, 0.70);
  }
}

function UpdateCheckboxSize() {
  const checkboxContainers = document.querySelectorAll('checkbox-container');

  for (var i = 0; i<checkboxContainers.length; i++) {
    const checkbox = checkboxContainers[i];
    const marker = checkbox.querySelector("input");

    const availableHeight = checkbox.scrollHeight;
    const markerSize = availableHeight * 0.5;

    marker.style.height = markerSize + "px";
    marker.style.width = markerSize + "px";
  }
}