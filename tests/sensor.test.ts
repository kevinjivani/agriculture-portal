import { Sensor } from '../src/sensor';

describe('Sensor', () => {
    let sensor: Sensor;

    beforeEach(() => {
        sensor = new Sensor();
    });

    test('should return the default moisture level of 50', () => {
        expect(sensor.readData()).toBe(50);
    });

    test('should return moisture level when it is within valid range', () => {
        const moistureLevel = sensor.getMoistureLevel();
        expect(moistureLevel).toBe(50); // Default value is 50
    });

    test('should return -1 when moisture level is too low', () => {
        sensor['moistureLevel'] = -10; // Simulating invalid low moisture level
        const result = sensor.getMoistureLevel();
        expect(result).toBe(-1);
    });

    test('should return -1 when moisture level is too high', () => {
        sensor['moistureLevel'] = 150; // Simulating invalid high moisture level
        const result = sensor.getMoistureLevel();
        expect(result).toBe(-1);
    });
});
