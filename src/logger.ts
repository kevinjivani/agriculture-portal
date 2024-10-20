// logger.ts

import * as fs from 'fs';

export class Logger {
    static logFilePath: string = 'logs/app.log';

    static info(message: string): void {
        const logMessage = `[INFO] ${new Date().toISOString()}: ${message}`;
        console.log(logMessage);
        this.writeToFile(logMessage);
    }

    static error(message: string): void {
        const logMessage = `[ERROR] ${new Date().toISOString()}: ${message}`;
        console.error(logMessage);
        this.writeToFile(logMessage);
    }

    private static writeToFile(message: string): void {
        try {
            fs.appendFileSync(this.logFilePath, message + '\n');
        } catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            } else {
                console.error('An unexpected error occurred.');
            }
            console.error("Failed to write log to file:");
        }
    }
}
