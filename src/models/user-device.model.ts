import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./index";

export enum DeviceType {
  IOS = "ios",
  ANDROID = "android",
  WEB = "web",
}

@Table({
  tableName: "user_devices",
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class UserDevice extends Model<UserDevice> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  userId: string;

  @Column({
    type: DataType.STRING(16),
    allowNull: true,
  })
  mobile: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(8),
    allowNull: true,
  })
  token: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  verifiedAt: Date;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  deviceId: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(DeviceType),
    allowNull: false,
    defaultValue: DeviceType.IOS,
  })
  deviceType: string;

  @BelongsTo(() => User, {
    constraints: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
