"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
class Combination {
    async createBattleCombination() {
        const challenges = await models_1.Challenge.findAll();
        console.log('All challenge==>', challenges);
        for (const challenge of challenges) {
            console.log("challenge.id", challenge.id);
            const videoData = await models_1.ChallengeVideos.findAll({
                where: {
                    challengeId: challenge.id
                }
            });
            const videoIds = videoData.map((item) => {
                return item.videoId;
            });
            console.log("videoIds", videoIds);
            const combination = await this.getCombination(videoIds, 2);
            console.log("combination==========>", combination);
            await this.storeBattleCombination(challenge.id, combination);
        }
    }
    async storeBattleCombination(challengeId, data) {
        const insertData = data.map((battle) => {
            return {
                challengeId: challengeId,
                challengeVideoId1: battle[0],
                challengeVideoId2: battle[1],
            };
        });
        const dataRes = await models_1.Battle.bulkCreate(insertData);
        console.log('=========dataRes======', dataRes);
    }
    async getCombination(data, pair) {
        return await this.pairCombination(data, pair);
    }
    pairCombination(data, noOfPairs, prefix = []) {
        if (noOfPairs == 0)
            return [prefix];
        return data.flatMap((v, i) => this.pairCombination(data.slice(i + 1), noOfPairs - 1, [...prefix, v]));
    }
}
const BattleCombination = new Combination();
exports.default = BattleCombination;
//# sourceMappingURL=combination.js.map