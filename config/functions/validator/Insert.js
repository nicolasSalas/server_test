const Joi = require("joi");

const InsertUser = {
  Nombre: Joi.string().required(),
  Apellido: Joi.string().required(),
};

module.exports = {
  InsertUser,
};
