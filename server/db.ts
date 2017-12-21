import config from 'config'
import { Sequelize } from 'sequelize-typescript'

const seq = new Sequelize('sqlite://./db.sqlite')

seq.addModels([__dirname + '/model'])

// test connection
seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
    return seq.sync()
  })
  .catch((err:any) => {
    console.error('Unable to connect to the database:', err)
  })

export default seq
