import { Model } from "sequelize-typescript";
import { User, Challenge, UserVideo } from "./index";
export declare class ChallengeVideos extends Model<ChallengeVideos> {
    id: string;
    challengeId: string;
    videoId: string;
    userId: string;
    user: User;
    challenge: Challenge;
    userVideo: UserVideo;
}
