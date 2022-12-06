import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Challenge } from './challenge.model';
//import { Season } from './season.model';
import { UserVideo } from './user-video.model';

@Table({
  tableName: 'battles',
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class Battle extends Model<Battle> {
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
    allowNull: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  challengeId: string;

  @ForeignKey(() => UserVideo)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  challengeVideoId1: string;

  @ForeignKey(() => UserVideo)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  challengeVideoId2: string;


  @BelongsTo(() => Challenge, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  challenge: Challenge;

  @BelongsTo(() => UserVideo, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userVideo: UserVideo;
}
