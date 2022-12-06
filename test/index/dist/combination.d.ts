declare class Combination {
    createBattleCombination(): Promise<void>;
    storeBattleCombination(challengeId: string, data: any[]): Promise<void>;
    getCombination(data: any, pair: any): Promise<any>;
    pairCombination(data: any, noOfPairs: any, prefix?: any[]): any;
}
declare const BattleCombination: Combination;
export default BattleCombination;
