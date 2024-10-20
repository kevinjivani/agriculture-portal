// main.ts
import { testSensor } from './sensor';
import { testCropMonitor } from './cropMonitor';
import { testPrecisionIrrigation } from './precisionIrrigation';

// Run all test cases
console.log("Running Sensor Test:");
testSensor();

console.log("\nRunning CropMonitor Test:");
testCropMonitor();

console.log("\nRunning PrecisionIrrigation Test:");
testPrecisionIrrigation();
