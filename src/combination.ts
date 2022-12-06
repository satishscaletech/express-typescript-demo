import { Battle, Challenge, ChallengeVideos } from './models';

class Combination {
  /**
   * createBattleCombination
   */
  public async createBattleCombination() {
    const challenges = await Challenge.findAll();

    console.log('All challenge==>', challenges);


    for (const challenge of challenges) {
      console.log("challenge.id", challenge.id);

      const videoData = await ChallengeVideos.findAll({
        where: {
          challengeId: challenge.id
        }
      })

      const videoIds = videoData.map((item) => {
        return item.videoId;
      });

      console.log("videoIds", videoIds);
      const combination = await this.getCombination(videoIds, 2);
      console.log("combination==========>", combination);
      await this.storeBattleCombination(challenge.id, combination);
    }
  }

  /**
   * storeBattleCombination
   */
  public async storeBattleCombination(challengeId: string, data: any[]) {

    const insertData = data.map((battle) => {
      return {
        challengeId: challengeId,
        challengeVideoId1: battle[0],
        challengeVideoId2: battle[1],
      };
    })
    const dataRes = await Battle.bulkCreate(insertData)

    console.log('=========dataRes======', dataRes);
  }

  /**
   * getCombination
   */
  public async getCombination(data, pair) {
    return await this.pairCombination(data, pair);
  }

  /**
   * name
   */
  public pairCombination(data, noOfPairs, prefix = []) {
    if (noOfPairs == 0) return [prefix];
    return data.flatMap((v, i) =>
      this.pairCombination(data.slice(i + 1), noOfPairs - 1, [...prefix, v])
    );
  }
}

const BattleCombination = new Combination();
export default BattleCombination;
