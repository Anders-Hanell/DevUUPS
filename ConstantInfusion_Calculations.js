function ConstantInfusion_CalculateValues(bolusDose, infusionRate, halflife, infusionTime) {
  const numTimepoints = 1000;
  const Vd = 70;

  var fiveHalfLifes = 5 * halflife;
  var clearance = Vd * Math.log(2) / halflife;
  const initialConcentration = bolusDose / Vd;
  const initialElimRate = clearance / Vd * initialConcentration;

  var plasmaConc = [];
  plasmaConc.push(initialConcentration);
  
  var elimRate = [];
  elimRate.push(initialElimRate);

  var clearanceLevel = [];
  for (i = 0; i < numTimepoints; i++) {
    clearanceLevel.push(clearance);
  }

  var infusionSpeed = [];
  for (i = 0; i < numTimepoints; i++) {
    clearanceLevel.push(clearance);
    
    if (i < infusionTime) {
      infusionSpeed.push(infusionRate);
    }
    else {
      infusionSpeed.push(0.0);
    }
  }

  var prevConc = bolusDose;

  for (i = 0; i < numTimepoints - 1; i++) {
    var currentElim = clearance / Vd * prevConc;
    var currentConc = prevConc + infusionSpeed[i] - currentElim;
    
    plasmaConc.push(currentConc);
    elimRate.push(currentElim);

    prevConc = currentConc;
  }
  
  return new Array(plasmaConc, elimRate, infusionSpeed, fiveHalfLifes, clearanceLevel);
}