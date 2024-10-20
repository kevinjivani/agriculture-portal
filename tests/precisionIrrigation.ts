// precisionIrrigation.ts
import { Sensor } from './sensor';

export class PrecisionIrrigation {
    moistureSensor: Sensor;

    constructor(moistureSensor: Sensor) {
        this.moistureSensor = moistureSensor;
    }

    // Method to simulate irrigation system based on soil moisture
    irrigate(): string {
        const moistureLevel = this.moistureSensor.readData();
        if (moistureLevel < 40) {
            return "Irrigation ON: Soil moisture is low.";
        }
        return "Irrigation OFF: Soil moisture is adequate.";
    }
}
