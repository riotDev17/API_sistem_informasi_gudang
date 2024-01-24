import Joi from 'joi';

const createPemasokValidation = Joi.object({
  nama_pemasok: Joi.string().max(50).required(),
  nama_kontak_pemasok: Joi.string().max(50).required(),
  no_telp_pemasok: Joi.string().max(15).required(),
  alamat_pemasok: Joi.string().max(100).required(),
});

export { createPemasokValidation };
