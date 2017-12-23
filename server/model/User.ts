import {
  Table,
  Column,
  DataType,
  Model
} from 'sequelize-typescript'

@Table({
  timestamps: true
})
export default class User extends Model<User> {
  @Column({ primaryKey: true })
  id?:number
  @Column
  username?: string
  @Column
  password?: string
}
