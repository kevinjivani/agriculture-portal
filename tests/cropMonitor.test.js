"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCropMonitor = testCropMonitor;
// cropMonitor.test.ts
const sensor_1 = require("./sensor");
const cropMonitor_1 = require("./cropMonitor");
// Test case for CropMonitor module
function testCropMonitor() {
    const moistureSensor = new sensor_1.Sensor('Moisture', 50);
    const nutrientSensor = new sensor_1.Sensor('Nutrient', 10);
    const temperatureSensor = new sensor_1.Sensor('Temperature', 25);
    const cropMonitor = new cropMonitor_1.CropMonitor(moistureSensor, nutrientSensor, temperatureSensor);
    const result = cropMonitor.assessCropHealth();
    console.log(result); // Expected: "Crop health is good!"
}
// Run the test case
testCropMonitor();
