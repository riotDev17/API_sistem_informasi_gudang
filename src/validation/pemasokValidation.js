import Joi from 'joi';

const createPemasokValidation = Joi.object({
  nama_pemasok: Joi.string().max(50).required(),
  nama_kontak_pemasok: Joi.string().max(50).required(),
  no_telp_pemasok: Joi.string().max(15).required(),
  alamat_pemasok: Joi.string().max(100).required(),
});

const updatePemasokValidation = Joi.object({
  id_pemasok: Joi.string().max(50).required(),
  nama_pemasok: Joi.string().max(50),
  nama_kontak_pemasok: Joi.string().max(50),
  no_telp_pemasok: Joi.string().max(15),
  alamat_pemasok: Joi.string().max(100),
});

const getPemasokValidation = Joi.string().max(50).required();

export {
  createPemasokValidation,
  updatePemasokValidation,
  getPemasokValidation,
};
