// cropMonitor.ts
import { Logger } from './logger';

export function testCropMonitor(): string {
    return "CropMonitor test passed!";
}

export class CropMonitor {
    checkCropHealth(temperature: number): string {
        try {
            if (temperature < 0 || temperature > 50) {
                throw new Error("Temperature out of bounds");
            }

            if (temperature >= 18 && temperature <= 25) {
                Logger.info('Crop health is optimal.');
                return "Crop health is optimal!";
            } else if (temperature > 25) {
                Logger.info('Warning: High temperature.');
                return "Warning: High temperature!";
            } else {
                Logger.info('Warning: Low temperature.');
                return "Warning: Low temperature!";
            }
        } catch (error) {
            if (error instanceof Error) {
                Logger.error(error.message);
            } else {
                Logger.error('An unexpected error occurred.');
            }
            return "Error to generate Crop Health";
        }
    }
}
