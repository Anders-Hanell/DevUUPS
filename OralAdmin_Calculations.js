function OralAdmin_CalculateValues(
    TabletStrength,
    TabletsPerAdmin,
    AdminsPerDay,
    TabletDissolveTime,
    Bioavailability,
    Clearance)
{
  
  TabletStrength = TabletStrength * 1.0;
  TabletsPerAdmin = TabletsPerAdmin * 1.0;
  AdminsPerDay = AdminsPerDay * 1.0;
  TabletDissolveTime = TabletDissolveTime * 1.0;
  Bioavailability = Bioavailability * 1.0;
  Clearance = Clearance * 1.0;

  const tabletsPerDay = TabletsPerAdmin * AdminsPerDay * 1.0;
  const dosePerAdmin = TabletStrength * TabletsPerAdmin;

  let dissolveTime = TabletDissolveTime;

  const bioavailability = Bioavailability;

  const clearance = Clearance;


  const Vd = 70;

  
  //var clearance = Vd * Math.log(2) / halflife;

  

  const numSimulatedDays = 20.0;
  
  const numTimepoints = numSimulatedDays * 24 * 60;

  const numTimepointsPerDay = numTimepoints / numSimulatedDays;
  const numHoursPerDay = 24.0;

  const dissolveDurationTimepoints = Math.round(numTimepointsPerDay * dissolveTime / numHoursPerDay);

  const tabletRadius = 1.0;
  const totalVolume = 4.0 / 3.0 * Math.PI * Math.pow(tabletRadius, 3.0);
  var releaseProfileForSingleAdmin = [];
  for (i = 0; i < dissolveDurationTimepoints; i++) {
    const startRadius = (dissolveDurationTimepoints - i) / dissolveDurationTimepoints;
    const endRadius = (dissolveDurationTimepoints - i - 1) / dissolveDurationTimepoints;
    
    const startVolume = 4.0 / 3.0 * Math.PI * Math.pow(startRadius, 3.0);
    const endVolume = 4.0 / 3.0 * Math.PI * Math.pow(endRadius, 3.0);

    const substanceReleased = dosePerAdmin * (startVolume - endVolume) / totalVolume;

    releaseProfileForSingleAdmin.push(substanceReleased);
  }

  var releaseRate = [];
  for (i = 0; i < numTimepoints; i++) {
    releaseRate.push(0.0);
  }

  const totalNumAdmins = AdminsPerDay * numSimulatedDays;
  const adminDuration = 1.0 * numTimepoints / totalNumAdmins;

  for (admin = 0; admin < totalNumAdmins; admin++) {
    const adminStart = Math.round(admin * adminDuration);
      for (dissolveTime = 0; dissolveTime < dissolveDurationTimepoints; dissolveTime++) {
        const timepoint = adminStart + dissolveTime;
        if (timepoint < numTimepoints) {
          releaseRate[timepoint] += releaseProfileForSingleAdmin[dissolveTime];
        }
      }
  }

  var absorbtionRate = [];
  for (i = 0; i < numTimepoints; i++) {
    absorbtionRate.push(releaseRate[i] * bioavailability / 100.0);
  }

  var currentConc = 0.0
  var plasmaConc = [];
  plasmaConc.push(0.0);
  var prevConc = currentConc;

  var elimRate = [];
  elimRate.push(0.0);

  const minutesPerDay = 60.0 * 24.0;
  var minutesPerTimepoint = (numSimulatedDays * minutesPerDay) / numTimepoints;

  //minutesPerTimepoint = 1.0;

  for (i = 0; i < numTimepoints - 1; i++) {
    var currentElim = minutesPerTimepoint * prevConc * clearance / (Vd * 1000.0);
    var currentConc = prevConc + absorbtionRate[i] - currentElim;
    
    currentConc = Math.max(0.0, currentConc);

    plasmaConc.push(currentConc);
    elimRate.push(currentElim);

    prevConc = currentConc;
  }

  return new Array(plasmaConc, releaseRate, absorbtionRate);
}