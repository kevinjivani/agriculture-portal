"use strict";

const fs = require("fs");
const path = require("path");

class Logger {
    static logFilePath = path.resolve(__dirname, "logs", "app.log");

    static initializeLogFile() {
        const logDir = path.dirname(this.logFilePath);
        try {
            if (!fs.existsSync(logDir)) {
                fs.mkdirSync(logDir, { recursive: true });
            }
            if (!fs.existsSync(this.logFilePath)) {
                fs.writeFileSync(this.logFilePath, ""); // Create an empty log file
            }
        } catch (error) {
            // Suppress errors during log file initialization
        }
    }

    static info(message) {
        const logMessage = `[INFO] ${new Date().toISOString()}: ${message}`;
        if (process.env.NODE_ENV !== "test") {
            console.log(logMessage); // Only log to console if not in test mode
        }
        this.writeToFile(logMessage);
    }

    static error(message) {
        const logMessage = `[ERROR] ${new Date().toISOString()}: ${message}`;
        if (process.env.NODE_ENV !== "test") {
            console.error(logMessage); // Only log to console if not in test mode
        }
        this.writeToFile(logMessage);
    }

    static writeToFile(message) {
        try {
            this.initializeLogFile();
            fs.appendFileSync(this.logFilePath, message + "\n");
        } catch (error) {
            // Suppress errors during file writing
        }
    }
}

// Ensure the log file is initialized at startup
Logger.initializeLogFile();

module.exports = { Logger };
