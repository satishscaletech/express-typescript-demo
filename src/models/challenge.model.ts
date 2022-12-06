import {
  BelongsToMany,
  Column,
  DataType,
  HasMany,
  Model,
  Table,
} from "sequelize-typescript";
import { ChallengeVideos } from "./challenge-videos.model";
import { UserVideo } from "./user-video.model";

export enum challengeType {
  TEAM = "team",
  SOLO = "solo",
  BOTH = "both",
}

@Table({
  tableName: "challenges",
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class Challenge extends Model<Challenge> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
    defaultValue: null,
  })
  description: string;

  @Column({
    type: DataType.ENUM,
    allowNull: false,
    values: Object.values(challengeType),
  })
  challengeType: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  challengeRegStartAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  challengeRegEndAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  challengeVoteStartAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  challengeVoteEndAt: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  resultAnnouncedAt: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isPrivate: boolean;

  @Column({
    type: DataType.STRING(255),
  })
  partnerImage: string;

  @Column({
    type: DataType.STRING(255),
  })
  challengeIcon: string;

  @BelongsToMany(() => UserVideo, {
    through: () => ChallengeVideos,
  })
  videos: UserVideo[];

  @HasMany(() => ChallengeVideos)
  ChallengeVideos: ChallengeVideos[];
}
