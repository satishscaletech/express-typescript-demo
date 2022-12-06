"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const combination_1 = require("./combination");
const models_1 = require("./models");
const connection_1 = require("./lib/db/connection");
new connection_1.default();
const handler = async (event, context) => {
    console.log(`Event: ${JSON.stringify(event, null, 2)}`);
    console.log(`Context: ${JSON.stringify(context, null, 2)}`);
    console.log("================test=====123===");
    const data1 = await models_1.User.findByPk();
    console.log("data=========1111111111=>", data1);
    const battle = await combination_1.default.createBattleCombination();
    console.log("battle", battle);
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: "hello world",
        }),
    };
};
exports.handler = handler;
//# sourceMappingURL=index.js.map