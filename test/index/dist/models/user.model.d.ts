import { Model } from "sequelize-typescript";
export declare enum UserStatus {
    PENDING = "pending",
    APPROVED = "approved",
    BLOCK = "blocked"
}
export declare enum Gender {
    MALE = "male",
    FEMALE = "female",
    OTHER = "other"
}
export declare class User extends Model<User> {
    id: string;
    firebaseId: string;
    userName: string;
    email: string;
    firstName: string;
    password: string;
    middleName: string;
    lastName: string;
    mobile: string;
    dob: string;
    gender: string;
    image: string;
    appleId: string;
    description: string;
    country: string;
    status: string;
    activatedAt: Date;
}
