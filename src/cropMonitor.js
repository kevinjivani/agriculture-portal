"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CropMonitor = void 0;
exports.testCropMonitor = testCropMonitor;
// cropMonitor.ts
const logger_1 = require("./logger");
function testCropMonitor() {
    return "CropMonitor test passed!";
}
class CropMonitor {
    checkCropHealth(temperature) {
        try {
            if (temperature < 0 || temperature > 50) {
                throw new Error("Temperature out of bounds");
            }
            if (temperature >= 18 && temperature <= 25) {
                logger_1.Logger.info('Crop health is optimal.');
                return "Crop health is optimal!";
            }
            else if (temperature > 25) {
                logger_1.Logger.info('Warning: High temperature.');
                return "Warning: High temperature!";
            }
            else {
                logger_1.Logger.info('Warning: Low temperature.');
                return "Warning: Low temperature!";
            }
        }
        catch (error) {
            if (error instanceof Error) {
                logger_1.Logger.error(error.message);
            }
            else {
                logger_1.Logger.error('An unexpected error occurred.');
            }
            return "Error to generate Crop Health";
        }
    }
}
exports.CropMonitor = CropMonitor;
