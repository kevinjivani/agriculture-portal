import * as fs from 'fs';
import * as path from 'path';

export class Logger {
    static logFilePath: string = path.resolve(__dirname, 'logs', 'app.log'); // Log file path inside the "logs" directory

    static initializeLogFile(): void {
        const logDir = path.dirname(this.logFilePath);

        try {
            // Ensure the logs directory exists
            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, { recursive: true });
            }

            // Ensure the log file exists
            if (!fs.existsSync(this.logFilePath)) {
                fs.writeFileSync(this.logFilePath, ''); // Create an empty log file
            }
        } catch (error) {
            console.error('Error initializing the log file:', error instanceof Error ? error.message : 'Unknown error');
        }
    }

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
            this.initializeLogFile(); // Ensure the file and directory exist before writing
            fs.appendFileSync(this.logFilePath, message + '\n');
        } catch (error) {
            console.error('Failed to write to log file:', error instanceof Error ? error.message : 'Unknown error');
        }
    }
}

// Ensure the log file is initialized at startup
Logger.initializeLogFile();
