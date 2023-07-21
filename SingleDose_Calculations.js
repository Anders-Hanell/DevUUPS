function SingleDose_CalculateValues(
  dose_mg,
  halflife_minutes,
  tabletDissolveTime_minutes)
{

dose_mg = dose_mg * 1.0;
halflife_minutes = halflife_minutes * 1.0;
tabletDissolveTime_minutes = tabletDissolveTime_minutes * 1.0;

const bioavailability_percent = 80.0;

const Vd_liter = 70;

let clearance_liter_per_min = Vd_liter * Math.log(2) / halflife_minutes;

if (SingleDose_AdminTypeSelection == "IV") {
  return SingleDose_CalculateValuesForIV(dose_mg, Vd_liter, clearance_liter_per_min);
}

const numSimulatedDays = 1.0;
const numTimepoints = numSimulatedDays * 24 * 60;
const dissolveDurationTimepoints = Math.round(tabletDissolveTime_minutes);

const tabletRadius = 1.0;
const totalVolume = 4.0 / 3.0 * Math.PI * Math.pow(tabletRadius, 3.0);

var releaseRate_mg_per_minute = [];
for (i = 0; i < numTimepoints; i++) {
  releaseRate_mg_per_minute.push(0.0);
}

for (i = 0; i < dissolveDurationTimepoints; i++) {
  const startRadius = (dissolveDurationTimepoints - i) / dissolveDurationTimepoints;
  const endRadius = (dissolveDurationTimepoints - i - 1) / dissolveDurationTimepoints;
  
  const startVolume = 4.0 / 3.0 * Math.PI * Math.pow(startRadius, 3.0);
  const endVolume = 4.0 / 3.0 * Math.PI * Math.pow(endRadius, 3.0);

  const substanceReleased_mg = dose_mg * (startVolume - endVolume) / totalVolume;

  releaseRate_mg_per_minute[i] = substanceReleased_mg;
}

var absorbtionRate_mg_per_minute = [];
for (i = 0; i < numTimepoints; i++) {
  absorbtionRate_mg_per_minute.push(releaseRate_mg_per_minute[i] * bioavailability_percent / 100.0);
}


var plasmaConc = [];
plasmaConc.push(0.0);
var currentConc = 0.0
var prevConc = 0.0;

for (i = 0; i < numTimepoints - 1; i++) {
  var currentElim = prevConc * clearance_liter_per_min / Vd_liter;
  var currentConc = prevConc + absorbtionRate_mg_per_minute[i] / Vd_liter - currentElim;
  
  currentConc = Math.max(0.0, currentConc);

  plasmaConc.push(currentConc);

  prevConc = currentConc;
}

var maxConc = plasmaConc.reduce((a, b) => Math.max(a, b), -Infinity);

var cmax = [];
for (i = 0; i < numTimepoints; i++) {
  cmax.push(maxConc);
}

var aucMinutes = plasmaConc.reduce((a, b) => a + b, 0);
var aucHours = aucMinutes / 60;

var auc = [];
for (i = 0; i < numTimepoints; i++) {
  auc.push(aucHours);
}

let tmaxIndex = FindIndexOfMaxValue(plasmaConc);

return new Array(plasmaConc, absorbtionRate_mg_per_minute, cmax, auc, tmaxIndex);
}

function SingleDose_CalculateValuesForIV(Dose_mg, Vd_liter, clearance_liter_per_min) {
  const numTimepoints = 24*60;

  const initialConcentration = Dose_mg / Vd_liter;

  var plasmaConc_mg_per_liter = [];
  plasmaConc_mg_per_liter.push(initialConcentration);
  
  var prevConc = initialConcentration;

  for (i = 0; i < numTimepoints - 1; i++) {
    var currentElim = clearance_liter_per_min / Vd_liter * prevConc;
    var currentConc = prevConc - currentElim;
    
    plasmaConc_mg_per_liter.push(currentConc);

    prevConc = currentConc;
  }
  
  var absorbtionRate = [];
  for (i = 0; i < numTimepoints; i++) {
    absorbtionRate.push(0);
  }

  var cmax = [];
  for (i = 0; i < numTimepoints; i++) {
    cmax.push(plasmaConc_mg_per_liter[0]);
  }

  var aucMinutes = plasmaConc_mg_per_liter.reduce((a, b) => a + b, 0);
  var aucHours = aucMinutes / 60;

  var auc = [];
  for (i = 0; i < numTimepoints; i++) {
    auc.push(aucHours);
  }

  let tmaxIndex = FindIndexOfMaxValue(plasmaConc_mg_per_liter);

  return new Array(plasmaConc_mg_per_liter, absorbtionRate, cmax, auc, tmaxIndex);
}