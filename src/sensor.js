"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
exports.testSensor = testSensor;
// sensor.ts
class Sensor {
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }
    // Method to simulate reading sensor data
    readData() {
        return this.data;
    }
}
exports.Sensor = Sensor;
// Test case for Sensor module
function testSensor() {
    const moistureSensor = new Sensor('Moisture', 50);
    const result = moistureSensor.readData();
    console.log(`Sensor ${moistureSensor.name}: ${result}`); // Expected: "Sensor Moisture: 50"
}
