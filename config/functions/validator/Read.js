const Joi = require('joi');

//READ VALIDATOR SERVER

const ReadAttributeExpertizID = {
    Expertiz_ID: Joi.number().integer().required(),
}
const ReadMail = {
    Mail: Joi.string().required(),
}
module.exports = {
    ReadAttributeExpertizID,
    ReadMail
};