"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropMonitor = void 0;
exports.testCropMonitor = testCropMonitor;
// cropMonitor.ts
const sensor_1 = require("./sensor");
class CropMonitor {
    constructor(moistureSensor, nutrientSensor, temperatureSensor) {
        this.moistureSensor = moistureSensor;
        this.nutrientSensor = nutrientSensor;
        this.temperatureSensor = temperatureSensor;
    }
    // Method to assess crop health based on sensor data
    assessCropHealth() {
        const moistureLevel = this.moistureSensor.readData();
        const nutrientLevel = this.nutrientSensor.readData();
        const temperature = this.temperatureSensor.readData();
        if (moistureLevel < 30 || nutrientLevel < 5 || temperature > 35) {
            return "Warning: Crop health is at risk!";
        }
        return "Crop health is good!";
    }
}
exports.CropMonitor = CropMonitor;
// Test case for CropMonitor module
function testCropMonitor() {
    const moistureSensor = new sensor_1.Sensor('Moisture', 50);
    const nutrientSensor = new sensor_1.Sensor('Nutrient', 10);
    const temperatureSensor = new sensor_1.Sensor('Temperature', 25);
    const cropMonitor = new CropMonitor(moistureSensor, nutrientSensor, temperatureSensor);
    const result = cropMonitor.assessCropHealth();
    console.log(result); // Expected: "Crop health is good!"
}
