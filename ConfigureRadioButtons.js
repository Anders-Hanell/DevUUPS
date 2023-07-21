function UpdateRadioButtonFontSizes() {
  const radioButtonContainers = document.querySelectorAll('radio-button-container');

  for (var i = 0; i<radioButtonContainers.length; i++) {
    const buttonLabels = radioButtonContainers[i].querySelectorAll('p');
    for (var j = 0; j<buttonLabels.length; j++) {
      AdjustFontSizeForContainer(buttonLabels[j], 0.95, 0.50);
    }
  }
}

function UpdateRadioButtonSize() {
  
  const radioButtonContainers = document.querySelectorAll('radio-button-container');

  for (var i = 0; i<radioButtonContainers.length; i++) {
    let height = radioButtonContainers[i].clientHeight * 0.7;

    var buttonA = radioButtonContainers[i].querySelector('#ButtonA');
    buttonA.style.height = height + "px";
    buttonA.style.width = height + "px";

    var buttonB = radioButtonContainers[i].querySelector('#ButtonB');
    buttonB.style.height = height + "px";
    buttonB.style.width = height + "px";
  }
}