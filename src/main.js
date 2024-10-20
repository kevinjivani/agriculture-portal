"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// main.ts
const sensor_1 = require("./sensor");
const cropMonitor_1 = require("./cropMonitor");
const precisionIrrigation_1 = require("./precisionIrrigation");
// Run all test cases
console.log("Running Sensor Test:");
console.log((0, sensor_1.testSensor)());
console.log("\nRunning CropMonitor Test:");
console.log((0, cropMonitor_1.testCropMonitor)());
console.log("\nRunning PrecisionIrrigation Test:");
console.log((0, precisionIrrigation_1.testPrecisionIrrigation)());
