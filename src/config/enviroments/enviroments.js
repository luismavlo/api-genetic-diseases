require('dotenv').config(); //sirve para utilizar las envs
const env = require('env-var'); //sirve para validar las envs

exports.envs = {
  PORT: env.get('PORT').required().asPortNumber(),
  DB_URI: env.get('DB_URI').required().asString()
}



