"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
const sequelize_typescript_1 = require("sequelize-typescript");
class DBConnection {
    constructor() {
        const connection = new sequelize_typescript_1.Sequelize({
            dialect: "postgres",
            host: "localhost",
            username: "postgres",
            password: "postgres",
            database: "viralstage_dev",
            logging: false,
            models: [
                models_1.User,
                models_1.Challenge,
                models_1.ChallengeVideos,
                models_1.UserVideo,
                models_1.Battle,
                models_1.Admin,
            ],
        });
        (async () => {
            try {
                await connection.sync();
                console.log("db server started");
            }
            catch (error) {
                console.error(error);
                process.exit(1);
            }
        })();
    }
}
exports.default = DBConnection;
//# sourceMappingURL=connection.js.map