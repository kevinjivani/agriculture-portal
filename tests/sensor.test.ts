// sensor.test.ts
import { Sensor } from './sensor';

// Test case for Sensor module
export function testSensor() {
    const moistureSensor = new Sensor('Moisture', 50);
    const result = moistureSensor.readData();
    console.log(`Sensor ${moistureSensor.name}: ${result}`); // Expected: "Sensor Moisture: 50"
}

// Run the test case
testSensor();
