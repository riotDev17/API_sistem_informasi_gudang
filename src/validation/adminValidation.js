import Joi from 'joi';

const registerAdminValidation = Joi.object({
  nama_admin: Joi.string().max(50).required(),
  username: Joi.string().max(50).required(),
  password: Joi.string().min(8).required(),
});

const loginAdminValidation = Joi.object({
  username: Joi.string().max(50).required(),
  password: Joi.string().min(8).required(),
});

const updateAdminValidation = Joi.object({
  id_admin: Joi.string().max(100).required(),
  nama_admin: Joi.string().max(50).optional(),
  foto_admin: Joi.string().optional(),
});

const logoutAdminValidation = Joi.string().max(50).required();

export {
  registerAdminValidation,
  loginAdminValidation,
  updateAdminValidation,
  logoutAdminValidation,
};
