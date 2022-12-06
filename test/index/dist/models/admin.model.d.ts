import { Model } from 'sequelize-typescript';
export declare class Admin extends Model<Admin> {
    id: string;
    userName: string;
    email: string;
    password: string;
    isActive: boolean;
}
