function TwoCompartment_CalculateValues(bolusDose, infusionRate) {
  const numTimepoints = 1000;
  
  const V_central = 75.0;
  const V_peripheral = 25.0;

  const K_elimination = 0.05;
  const K_toPeripheral = 0.05;
  const K_fromPeripheral = 0.01;

  const C_initial_central = bolusDose / V_central;
  const C_initial_peripheral = 0.0;

  var C_central = [];
  C_central.push(C_initial_central);

  var C_peripheral = [];
  C_peripheral.push(C_initial_peripheral);

  for (i = 1; i < numTimepoints; i++) {
    let eliminationRate = C_central[i - 1] * K_elimination * V_central;
    let toPeripheralRate = C_central[i - 1] * K_toPeripheral * V_central;
    let fromPeripheralRate = C_peripheral[i - 1] * K_fromPeripheral * V_peripheral;

    C_central.push(C_central[i - 1] + (infusionRate + fromPeripheralRate - toPeripheralRate - eliminationRate) / V_central);
    C_peripheral.push(C_peripheral[i - 1] + (toPeripheralRate - fromPeripheralRate) / V_peripheral);
  }

  return new Array(C_central, C_peripheral);
}