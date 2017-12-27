import {
  Table,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
  Model
} from 'sequelize-typescript'
import User from './User'

@Table({
  timestamps: true
})
export default class Talk extends Model<Talk> {
  @Column({ primaryKey: true, autoIncrement: true })
  id?:number

  @Column(DataType.TEXT)
  content?: string

  @ForeignKey(() => User)
  @Column
  userId?: number

  @BelongsTo(() => User)
  user?: User
}
