import Joi from 'joi';

const registerAdminValidation = Joi.object({
  nama_admin: Joi.string().max(50).required(),
  username: Joi.string().max(50).required(),
  password: Joi.string().min(8).required(),
});

export { registerAdminValidation };
