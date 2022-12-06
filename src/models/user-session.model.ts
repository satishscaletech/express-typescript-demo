import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User } from "./index";

@Table({
  tableName: "user_sessions",
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class UserSession extends Model<UserSession> {
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
    type: DataType.STRING(),
    allowNull: true,
  })
  jwtToken: string;

  @BelongsTo(() => User, {
    constraints: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;
}
