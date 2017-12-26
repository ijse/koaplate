import {
  Table,
  Column,
  DataType,
  Default,
  Model
} from 'sequelize-typescript'

@Table({
  timestamps: true
})
export default class User extends Model<User> {
  @Column
  name?: string

  @Default('local')
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
