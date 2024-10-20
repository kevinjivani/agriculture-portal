"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const sensor_1 = require("./sensor");
const cropMonitor_1 = require("./cropMonitor");
const precisionIrrigation_1 = require("./precisionIrrigation");
// Run all test cases
console.log("Running Sensor Test:");
(0, sensor_1.testSensor)();
console.log("\nRunning CropMonitor Test:");
(0, cropMonitor_1.testCropMonitor)();
console.log("\nRunning PrecisionIrrigation Test:");
(0, precisionIrrigation_1.testPrecisionIrrigation)();
