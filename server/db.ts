import config from 'config'
import Sequelize from 'sequelize'

const seq = new Sequelize('koaplate', '', '', {
  dialect: 'sqlite',
  storage: config.get('sqlite.file')
})

// test connection
seq
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.')
  })
  .catch((err:any) => {
    console.error('Unable to connect to the database:', err)
  })

export default seq
