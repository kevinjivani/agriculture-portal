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
