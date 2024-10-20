import { PrecisionIrrigation } from '../src/precisionIrrigation';
import { Sensor } from '../src/sensor';

describe('PrecisionIrrigation', () => {
    let precisionIrrigation: PrecisionIrrigation;
    let mockSensor: Sensor;

    beforeEach(() => {
        // Create a mock sensor with a specific moisture level
        mockSensor = new Sensor();
        precisionIrrigation = new PrecisionIrrigation(mockSensor);
    });

    test('should return "Irrigation ON: Soil moisture is low." when moisture level is below 40', () => {
        // Mock the moisture level to be low
        (mockSensor as any).moistureLevel = 30; // Directly setting the moistureLevel for testing
        const result = precisionIrrigation.irrigate();
        expect(result).toBe("Irrigation ON: Soil moisture is low.");
    });

    test('should return "Irrigation OFF: Soil moisture is adequate." when moisture level is 40 or above', () => {
        // Mock the moisture level to be adequate
        (mockSensor as any).moistureLevel = 50; // Directly setting the moistureLevel for testing
        const result = precisionIrrigation.irrigate();
        expect(result).toBe("Irrigation OFF: Soil moisture is adequate.");
    });
});
