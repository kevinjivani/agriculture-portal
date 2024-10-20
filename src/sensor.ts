// sensor.ts
import { Logger } from './logger';
import { getErrorMessage } from './errorHandler';

export function testSensor(): String {
    return "Sensor test passed!";
}

export class Sensor {
    readData() {
        return this.moistureLevel;
    }
    private moistureLevel: number;

    constructor() {
        this.moistureLevel = 50; // Default value
        Logger.info('Sensor initialized with default moisture level');
    }

    getMoistureLevel(): number {
        try {
            if (this.moistureLevel < 0 || this.moistureLevel > 100) {
                throw new Error("Invalid moisture level detected");
            }
            return this.moistureLevel;
        } catch (error) {
            const errorMessage = (error as Error).message;
            Logger.error(errorMessage);
            return -1; // Return -1 to indicate an error
        }
    }
}
