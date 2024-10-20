// sensor.ts
export class Sensor {
    name: string;
    data: number;

    constructor(name: string, data: number) {
        this.name = name;
        this.data = data;
    }

    // Method to simulate reading sensor data
    readData(): number {
        return this.data;
    }
}

// Test case for Sensor module
export function testSensor() {
    const moistureSensor = new Sensor('Moisture', 50);
    const result = moistureSensor.readData();
    console.log(`Sensor ${moistureSensor.name}: ${result}`); // Expected: "Sensor Moisture: 50"
}
