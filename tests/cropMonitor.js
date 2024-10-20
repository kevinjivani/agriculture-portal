"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropMonitor = void 0;
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
