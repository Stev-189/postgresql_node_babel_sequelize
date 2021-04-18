import Sequelize from 'sequelize'

export const sequelize =new Sequelize(
  'postgres',// base de datos
  'postgres',// usuario
  'pass-123',// password
  {
    host: 'localhost',// url de la base de datos
    dialect: 'postgres',// base de datos ose una postgres
    pool:{
      max:5,
      min:0,
      require:30000,
      idle:10000
    },
    logging: false//para que no muestre mensajes en consola
  }
)