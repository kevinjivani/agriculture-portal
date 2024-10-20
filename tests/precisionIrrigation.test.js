"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testPrecisionIrrigation = testPrecisionIrrigation;
// precisionIrrigation.test.ts
const sensor_1 = require("./sensor");
const precisionIrrigation_1 = require("./precisionIrrigation");
// Test case for PrecisionIrrigation module
function testPrecisionIrrigation() {
    const moistureSensor = new sensor_1.Sensor('Moisture', 20);
    const irrigationSystem = new precisionIrrigation_1.PrecisionIrrigation(moistureSensor);
    const result = irrigationSystem.irrigate();
    console.log(result); // Expected: "Irrigation ON: Soil moisture is low."
}
// Run the test case
testPrecisionIrrigation();
