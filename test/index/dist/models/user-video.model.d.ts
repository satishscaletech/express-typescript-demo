import { Model } from 'sequelize-typescript';
import { User, Admin } from './index';
export declare class UserVideo extends Model<UserVideo> {
    id: string;
    userId: string;
    videoFileName: string;
    videoUrl: string;
    thumbnailUrl: string;
    streamingUrl: string;
    tagCombinationId: string;
    blockedBy: String;
    user: User;
    admin: Admin;
}
