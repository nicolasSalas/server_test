const sequelize = require("sequelize")

// Production
//Nombre BD , username, password
const connection = new sequelize("testbd", "test", "test123", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false, // disable aliases
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
connection
  .authenticate()
  .then(() => {
    console.log("Conexion exitosa")
  })
  .catch(err => {
    console.error("No se logro conectar a la BD: ", err)
  })
module.exports = connection
