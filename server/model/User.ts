import {
  Table,
  Column,
  DataType,
  Unique,
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

  @Unique
  @Column
  username?: string

  @Column
  password?: string

  @Column
  avatar?: string

  @Column
  email?: string
}
