// main.ts
import { testSensor } from './sensor';
import { testCropMonitor } from './cropMonitor';
import { testPrecisionIrrigation } from './precisionIrrigation';

// Run all test cases
console.log("Running Sensor Test:");
console.log(testSensor());

console.log("\nRunning CropMonitor Test:");
console.log(testCropMonitor());

console.log("\nRunning PrecisionIrrigation Test:");
console.log(testPrecisionIrrigation());
