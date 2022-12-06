import { Model } from "sequelize-typescript";
import { ChallengeVideos } from "./challenge-videos.model";
import { UserVideo } from "./user-video.model";
export declare enum challengeType {
    TEAM = "team",
    SOLO = "solo",
    BOTH = "both"
}
export declare class Challenge extends Model<Challenge> {
    id: string;
    title: string;
    description: string;
    challengeType: string;
    challengeRegStartAt: Date;
    challengeRegEndAt: Date;
    challengeVoteStartAt: Date;
    challengeVoteEndAt: Date;
    resultAnnouncedAt: Date;
    isPrivate: boolean;
    partnerImage: string;
    challengeIcon: string;
    videos: UserVideo[];
    ChallengeVideos: ChallengeVideos[];
}
