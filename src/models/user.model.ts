import { Column, DataType, Model, Table } from "sequelize-typescript";

export enum UserStatus {
  PENDING = "pending",
  APPROVED = "approved",
  BLOCK = "blocked",
}

export enum Gender {
  MALE = "male",
  FEMALE = "female",
  OTHER = "other",
}

@Table({
  tableName: "users",
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class User extends Model<User> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  firebaseId: string;

  @Column({
    type: DataType.STRING(64),
    unique: true,
    allowNull: true,
  })
  userName: string;

  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(32),
    allowNull: true,
  })
  firstName: string;

  @Column({
    type: DataType.STRING(),
    allowNull: true,
  })
  password: string;

  @Column({
    type: DataType.STRING(32),
    allowNull: true,
  })
  middleName: string;

  @Column({
    type: DataType.STRING(32),
    allowNull: true,
  })
  lastName: string;

  @Column({
    type: DataType.STRING(16),
    unique: true,
    allowNull: true,
  })
  mobile: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  dob: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(Gender),
    allowNull: true,
  })
  gender: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  image: string;
  @Column({
    type: DataType.STRING(),
    allowNull: true,
  })
  appleId: string;

  @Column({
    type: DataType.STRING(500),
    allowNull: true,
  })
  description: string;

  @Column({
    type: DataType.STRING(32),
    allowNull: true,
  })
  country: string;

  @Column({
    type: DataType.ENUM,
    values: Object.values(UserStatus),
    defaultValue: UserStatus.PENDING,
    allowNull: true,
  })
  status: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  activatedAt: Date;
}
