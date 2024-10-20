"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const precisionIrrigation_1 = require("../src/precisionIrrigation");
const sensor_1 = require("../src/sensor");
describe('PrecisionIrrigation', () => {
    let precisionIrrigation;
    let mockSensor;
    beforeEach(() => {
        // Create a mock sensor with a specific moisture level
        mockSensor = new sensor_1.Sensor();
        precisionIrrigation = new precisionIrrigation_1.PrecisionIrrigation(mockSensor);
    });
    test('should return "Irrigation ON: Soil moisture is low." when moisture level is below 40', () => {
        // Mock the moisture level to be low
        mockSensor.moistureLevel = 30; // Directly setting the moistureLevel for testing
        const result = precisionIrrigation.irrigate();
        expect(result).toBe("Irrigation ON: Soil moisture is low.");
    });
    test('should return "Irrigation OFF: Soil moisture is adequate." when moisture level is 40 or above', () => {
        // Mock the moisture level to be adequate
        mockSensor.moistureLevel = 50; // Directly setting the moistureLevel for testing
        const result = precisionIrrigation.irrigate();
        expect(result).toBe("Irrigation OFF: Soil moisture is adequate.");
    });
});
