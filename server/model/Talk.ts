import {
  Table,
  Column,
  DataType,
  Model
} from 'sequelize-typescript'

@Table({
  timestamps: true
})
export default class Talk extends Model<Talk> {
  @Column(DataType.TEXT)
  content: string
}
