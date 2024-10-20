// cropMonitor.test.ts
import { Sensor } from './sensor';
import { CropMonitor } from './cropMonitor';

// Test case for CropMonitor module
export function testCropMonitor() {
    const moistureSensor = new Sensor('Moisture', 50);
    const nutrientSensor = new Sensor('Nutrient', 10);
    const temperatureSensor = new Sensor('Temperature', 25);

    const cropMonitor = new CropMonitor(moistureSensor, nutrientSensor, temperatureSensor);
    const result = cropMonitor.assessCropHealth();
    console.log(result); // Expected: "Crop health is good!"
}

// Run the test case
testCropMonitor();
