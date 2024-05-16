/**
 * @module log
 * This module contains functions for logging (Just the same as console.log) but it allows
 * us to disable logging in production, save logs etc etc.
 */

export type LogType =
    'INFO' |
    'WARN' |
    'ERROR' |
    'THROW' |
    'DEBUG';

export type LogEnum = {
    INFO: LogType;
    WARN: LogType;
    ERROR: LogType;
    DEBUG: LogType;
    THROW: LogType;
};

export type LogFunctions = { 
    info: (...args: Array<unknown>) => void;
    warn: (...args: Array<unknown>) => void;
    error: (...args: Array<unknown>) => void;
    debug: (...args: Array<unknown>) => void;
    throw: (...args: Array<unknown>) => void;
};

export type LogObject = {
    args: Array<unknown>;
    type: LogType;
    header: string;
    date: Date;
    group: string;
};