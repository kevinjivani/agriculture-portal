// precisionIrrigation.test.ts
import { Sensor } from './sensor';
import { PrecisionIrrigation } from './precisionIrrigation';

// Test case for PrecisionIrrigation module
export function testPrecisionIrrigation() {
    const moistureSensor = new Sensor('Moisture', 20);
    const irrigationSystem = new PrecisionIrrigation(moistureSensor);
    const result = irrigationSystem.irrigate();
    console.log(result); // Expected: "Irrigation ON: Soil moisture is low."
}

// Run the test case
testPrecisionIrrigation();
