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
  provider?: string

  @Column
  username?: string

  @Column
  password?: string

  @Column
  avatar?: string

  @Column
  email?: string
}
