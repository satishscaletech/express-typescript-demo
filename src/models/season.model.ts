import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'seasons',
  paranoid: true,
  underscored: true,
  timestamps: true,
})
export class Season extends Model<Season> {
  @Column({
    type: DataType.UUID,
    unique: true,
    defaultValue: DataType.UUIDV4,
    primaryKey: true,
  })
  id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,/*  */
  })
  title: string;

  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
    defaultValue: null,
  })
  description: string;
}
