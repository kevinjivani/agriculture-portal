"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecisionIrrigation = void 0;
exports.testPrecisionIrrigation = testPrecisionIrrigation;
// precisionIrrigation.ts
const sensor_1 = require("./sensor");
class PrecisionIrrigation {
    constructor(moistureSensor) {
        this.moistureSensor = moistureSensor;
    }
    // Method to simulate irrigation system based on soil moisture
    irrigate() {
        const moistureLevel = this.moistureSensor.readData();
        if (moistureLevel < 40) {
            return "Irrigation ON: Soil moisture is low.";
        }
        return "Irrigation OFF: Soil moisture is adequate.";
    }
}
exports.PrecisionIrrigation = PrecisionIrrigation;
// Test case for PrecisionIrrigation module
function testPrecisionIrrigation() {
    const moistureSensor = new sensor_1.Sensor('Moisture', 20);
    const irrigationSystem = new PrecisionIrrigation(moistureSensor);
    const result = irrigationSystem.irrigate();
    console.log(result); // Expected: "Irrigation ON: Soil moisture is low."
}
