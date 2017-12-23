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
  @Column
  name?: string
  @Column
  login?: string
  @Column
  password?: string
}
