import { Model } from 'sequelize-typescript';
import { Challenge } from './challenge.model';
import { UserVideo } from './user-video.model';
export declare class Battle extends Model<Battle> {
    id: string;
    challengeId: string;
    challengeVideoId1: string;
    challengeVideoId2: string;
    challenge: Challenge;
    userVideo: UserVideo;
}
