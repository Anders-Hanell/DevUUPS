function FindIndexOfMaxValue(array) {
  let maxIndex = 0;
  let maxValue = -Infinity;
  
  for (i = 0; i < array.length; i++) {
    if (array[i] > maxValue){
      maxValue = array[i];
      maxIndex = i;
    }
  }

  return maxIndex;
}