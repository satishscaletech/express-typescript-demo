import { Model } from "sequelize-typescript";
import { User } from "./index";
export declare enum DeviceType {
    IOS = "ios",
    ANDROID = "android",
    WEB = "web"
}
export declare class UserDevice extends Model<UserDevice> {
    id: string;
    userId: string;
    mobile: string;
    email: string;
    token: string;
    verifiedAt: Date;
    deviceId: string;
    deviceType: string;
    user: User;
}
