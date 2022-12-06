import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import {
  User,
  ChallengeVideos,
  Challenge,
  Battle,
} from './';

@Table({
  tableName: 'votes',
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class Vote extends Model<Vote> {
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

  @ForeignKey(() => Battle)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  battleId: string;

  @ForeignKey(() => ChallengeVideos)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  winnerChallengeVideoId: string;

  @ForeignKey(() => ChallengeVideos)
  @Column({
    type: DataType.UUID,
    allowNull: false
  })
  loserChallengeVideoId: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  votedBy: string;


  @BelongsTo(() => User, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @BelongsTo(() => Challenge, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  challenge: Challenge;

  @BelongsTo(() => Battle, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  battle: Battle;
}
