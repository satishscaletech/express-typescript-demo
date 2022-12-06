import { Model } from 'sequelize-typescript';
import { UserVideo, Challenge, User } from './index';
export declare class ReportVideo extends Model<ReportVideo> {
    id: string;
    userId: string;
    videoId: string;
    challengeId: string;
    user: User;
    userVideo: UserVideo;
    challenge: Challenge;
}
