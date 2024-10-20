import { CropMonitor } from '../src/cropMonitor';

describe('CropMonitor', () => {
    let cropMonitor: CropMonitor;

    beforeEach(() => {
        cropMonitor = new CropMonitor();
    });

    test('should return "Crop health is optimal!" for temperature between 18 and 25', () => {
        const result = cropMonitor.checkCropHealth(20);
        expect(result).toBe("Crop health is optimal!");
    });

    test('should return "Warning: High temperature!" for temperature above 25', () => {
        const result = cropMonitor.checkCropHealth(30);
        expect(result).toBe("Warning: High temperature!");
    });

    test('should return "Warning: Low temperature!" for temperature below 18', () => {
        const result = cropMonitor.checkCropHealth(10);
        expect(result).toBe("Warning: Low temperature!");
    });

    test('should return "Error to generate Crop Health" for temperature out of bounds (too high)', () => {
        const result = cropMonitor.checkCropHealth(60); // Out of bounds
        expect(result).toBe("Error to generate Crop Health");
    });

    test('should return "Error to generate Crop Health" for temperature out of bounds (too low)', () => {
        const result = cropMonitor.checkCropHealth(-10); // Out of bounds
        expect(result).toBe("Error to generate Crop Health");
    });
});
