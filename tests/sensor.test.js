"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testSensor = testSensor;
// sensor.test.ts
const sensor_1 = require("./sensor");
// Test case for Sensor module
function testSensor() {
    const moistureSensor = new sensor_1.Sensor('Moisture', 50);
    const result = moistureSensor.readData();
    console.log(`Sensor ${moistureSensor.name}: ${result}`); // Expected: "Sensor Moisture: 50"
}
// Run the test case
testSensor();
