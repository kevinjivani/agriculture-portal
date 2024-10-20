"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sensor = void 0;
exports.testSensor = testSensor;
// sensor.ts
const logger_1 = require("./logger");
function testSensor() {
    return "Sensor test passed!";
}
class Sensor {
    readData() {
        return this.moistureLevel;
    }
    constructor() {
        this.moistureLevel = 50; // Default value
        logger_1.Logger.info('Sensor initialized with default moisture level');
    }
    getMoistureLevel() {
        try {
            if (this.moistureLevel < 0 || this.moistureLevel > 100) {
                throw new Error("Invalid moisture level detected");
            }
            return this.moistureLevel;
        }
        catch (error) {
            const errorMessage = error.message;
            logger_1.Logger.error(errorMessage);
            return -1; // Return -1 to indicate an error
        }
    }
}
exports.Sensor = Sensor;
