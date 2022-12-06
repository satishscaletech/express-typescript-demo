import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { UserVideo, Challenge, User } from './index';

@Table({
  tableName: 'report_video',
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class ReportVideo extends Model<ReportVideo> {
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
    allowNull: false,
  })
  userId: string;

  @ForeignKey(() => UserVideo)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  videoId: string;

  @ForeignKey(() => Challenge)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  challengeId: string;

  @BelongsTo(() => User, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;
  @BelongsTo(() => UserVideo, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userVideo: UserVideo;

  @BelongsTo(() => Challenge, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  challenge: Challenge;
}
