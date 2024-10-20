// cropMonitor.ts
import { Sensor } from './sensor';

export class CropMonitor {
    moistureSensor: Sensor;
    nutrientSensor: Sensor;
    temperatureSensor: Sensor;

    constructor(moistureSensor: Sensor, nutrientSensor: Sensor, temperatureSensor: Sensor) {
        this.moistureSensor = moistureSensor;
        this.nutrientSensor = nutrientSensor;
        this.temperatureSensor = temperatureSensor;
    }

    // Method to assess crop health based on sensor data
    assessCropHealth(): string {
        const moistureLevel = this.moistureSensor.readData();
        const nutrientLevel = this.nutrientSensor.readData();
        const temperature = this.temperatureSensor.readData();

        if (moistureLevel < 30 || nutrientLevel < 5 || temperature > 35) {
            return "Warning: Crop health is at risk!";
        }
        return "Crop health is good!";
    }
}

// Test case for CropMonitor module
export function testCropMonitor() {
    const moistureSensor = new Sensor('Moisture', 50);
    const nutrientSensor = new Sensor('Nutrient', 10);
    const temperatureSensor = new Sensor('Temperature', 25);

    const cropMonitor = new CropMonitor(moistureSensor, nutrientSensor, temperatureSensor);
    const result = cropMonitor.assessCropHealth();
    console.log(result); // Expected: "Crop health is good!"
}
