import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { User, Admin } from './index';

@Table({
  tableName: 'user_videos',
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class UserVideo extends Model<UserVideo> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
    allowNull: false,
  })
  id: string;

  @ForeignKey(() => User)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  userId: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  videoFileName: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  videoUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  thumbnailUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  streamingUrl: string;

  @Column({
    type: DataType.STRING,
    allowNull: true
  })
  tagCombinationId: string;

  @ForeignKey(() => Admin)
  @Column({
    type: DataType.UUID,
  })
  blockedBy: String;

  @BelongsTo(() => User, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  user: User;

  @BelongsTo(() => Admin, {
    constraints: true,
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  admin: Admin;
}
