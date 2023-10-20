function ConstantInfusion_CalculateValues(bolusDose_mg, infusionRate_ug_per_min, halflife_min, infusionDuration) {
  // Infusion rates for TBI-patients (assuming bodyweight 70 kg):
  // metoprolol: 0.2–0.3 mg/kg/24 h -> 600-900 μg/h
  // clonidine: 0.5–1.0 * 8 μg/kg/24 h -> 10-20 μg/h
  
  const numTimepoints = 1000;
  const timeSliceLength_min = 1;
  
  const Vd_L = 70;
  const bolusDose_ug = bolusDose_mg * 1000;
  const fiveHalfLifes_min = 5 * halflife_min;
  const clearance_L_per_min = Vd_L * Math.log(2) / halflife_min;

  var clearanceArray_L_per_min = [];
  for (i = 0; i < numTimepoints; i++) {
    clearanceArray_L_per_min.push(clearance_L_per_min);
  }

  //var infusionRate_ug_per_min = infusionRate_ug_per_h / 60;
  var infusionRateArray_ug_per_min = [];
  for (i = 0; i < numTimepoints; i++) {
    if (i < infusionDuration) {
      infusionRateArray_ug_per_min.push(infusionRate_ug_per_min);
    }
    else {
      infusionRateArray_ug_per_min.push(0.0);
    }
  }

  const initialAmountInBody_ug = bolusDose_ug;
  var previousAmountInBody_ug = initialAmountInBody_ug;
  var currentAmountInBody_ug = 0;
  
  const initialPlasmaConcentration_ug_per_L = bolusDose_ug / Vd_L;
  var previousPlasmaConcentration_ug_per_L = initialPlasmaConcentration_ug_per_L;
  var currentPlasmaConcentration_ug_per_L = 0;

  var plasmaConcentrationArray_ug_per_L = [];
  plasmaConcentrationArray_ug_per_L.push(initialPlasmaConcentration_ug_per_L);

  const initialElimRate_ug_per_min = clearance_L_per_min * initialPlasmaConcentration_ug_per_L;
  var eliminationRateArray_ug_per_min = [];
  eliminationRateArray_ug_per_min.push(initialElimRate_ug_per_min);

  for (i = 0; i < numTimepoints - 1; i++) {
    var currentEliminationRate_ug_per_min = clearance_L_per_min * previousPlasmaConcentration_ug_per_L;
    var eliminatedAmount_ug = currentEliminationRate_ug_per_min * timeSliceLength_min;

    var infusedAmount_ug = infusionRateArray_ug_per_min[i] * timeSliceLength_min;

    currentAmountInBody_ug = previousAmountInBody_ug + infusedAmount_ug - eliminatedAmount_ug;

    currentPlasmaConcentration_ug_per_L = currentAmountInBody_ug / Vd_L;

    plasmaConcentrationArray_ug_per_L.push(currentPlasmaConcentration_ug_per_L);
    eliminationRateArray_ug_per_min.push(currentEliminationRate_ug_per_min);

    previousPlasmaConcentration_ug_per_L = currentPlasmaConcentration_ug_per_L;

    previousAmountInBody_ug = currentAmountInBody_ug;
  }
  
  return new Array(plasmaConcentrationArray_ug_per_L, eliminationRateArray_ug_per_min, infusionRateArray_ug_per_min, fiveHalfLifes_min, clearanceArray_L_per_min);
}