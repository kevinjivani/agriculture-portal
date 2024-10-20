"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrecisionIrrigation = void 0;
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
