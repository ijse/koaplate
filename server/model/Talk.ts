import Sequelize from 'sequelize'
import db from 'app/server/db'

db.define('Talk', {
  msg: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATE
  }
})

