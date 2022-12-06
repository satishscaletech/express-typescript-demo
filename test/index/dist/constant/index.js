"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DB_CONFIG = void 0;
require("dotenv/config");
console.log('process ', process.env.DB_HOST);
exports.DB_CONFIG = {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT) || 5432,
    max: 300,
    idleTimeoutMillis: 2000,
    connectionTimeoutMillis: 30000,
};
//# sourceMappingURL=index.js.map