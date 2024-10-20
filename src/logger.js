"use strict";
// logger.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const fs = __importStar(require("fs"));
class Logger {
    static info(message) {
        const logMessage = `[INFO] ${new Date().toISOString()}: ${message}`;
        console.log(logMessage);
        this.writeToFile(logMessage);
    }
    static error(message) {
        const logMessage = `[ERROR] ${new Date().toISOString()}: ${message}`;
        console.error(logMessage);
        this.writeToFile(logMessage);
    }
    static writeToFile(message) {
        try {
            fs.appendFileSync(this.logFilePath, message + '\n');
        }
        catch (error) {
            if (error instanceof Error) {
                console.error(error.message);
            }
            else {
                console.error('An unexpected error occurred.');
            }
            console.error("Failed to write log to file:");
        }
    }
}
exports.Logger = Logger;
Logger.logFilePath = 'logs/app.log';
