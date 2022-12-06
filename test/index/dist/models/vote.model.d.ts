import { Model } from 'sequelize-typescript';
import { User, Challenge, Battle } from './';
export declare class Vote extends Model<Vote> {
    id: string;
    challengeId: string;
    battleId: string;
    winnerChallengeVideoId: string;
    loserChallengeVideoId: string;
    votedBy: string;
    user: User;
    challenge: Challenge;
    battle: Battle;
}
