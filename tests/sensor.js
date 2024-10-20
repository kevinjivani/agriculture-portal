"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
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
