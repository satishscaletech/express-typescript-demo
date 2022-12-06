import {
  Column,
  DataType,
  HasMany,
  Model,
  Table,
  Unique,
} from 'sequelize-typescript';

@Table({
  tableName: 'admins',
  paranoid: true,
  timestamps: true,
  underscored: true,
})
export class Admin extends Model<Admin> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Unique({
    name: 'username',
    msg: `username is already taken`,
  })
  @Column({
    type: DataType.CHAR(20, false),
  })
  userName: string;

  @Unique({
    name: 'email',
    msg: 'email is already taken',
  })
  @Column({
    type: DataType.STRING(255),
  })
  email: string;

  @Column({
    type: DataType.STRING(150),
  })
  password: string;

  @Column({ defaultValue: true })
  isActive: boolean;
}
