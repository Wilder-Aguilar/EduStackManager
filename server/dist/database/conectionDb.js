"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = require("../config");
const DB_NAME = config_1.NODE_ENV === 'test' ? config_1.DB_TEST_NAME : config_1.DB_DEV_NAME;
const connectionDb = new sequelize_1.Sequelize(DB_NAME, config_1.DB_USER, config_1.DB_PASSWORD, {
    host: config_1.DB_HOST,
    dialect: 'mysql',
    port: Number(config_1.DB_PORT) || 3306,
    timezone: "+01:00",
    define: {
        timestamps: false,
    },
});
exports.default = connectionDb;
