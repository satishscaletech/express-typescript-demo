import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { User, Challenge, UserVideo } from "./index";

@Table({
  tableName: "challenge_videos",
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class ChallengeVideos extends Model<ChallengeVideos> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @ForeignKey(() => Challenge)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  challengeId: string;

  @ForeignKey(() => UserVideo)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  videoId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  userId: string;

  @BelongsTo(() => User, {
    constraints: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  user: User;

  @BelongsTo(() => Challenge, {
    constraints: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  challenge: Challenge;

  @BelongsTo(() => UserVideo, {
    constraints: true,
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
  })
  userVideo: UserVideo;
}
