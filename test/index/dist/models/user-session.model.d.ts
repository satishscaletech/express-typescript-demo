import { Model } from "sequelize-typescript";
import { User } from "./index";
export declare class UserSession extends Model<UserSession> {
    id: string;
    userId: string;
    jwtToken: string;
    user: User;
}
