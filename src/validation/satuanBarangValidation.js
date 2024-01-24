import Joi from 'joi';

const createSatuanBarangValidation = Joi.object({
  nama_satuan_barang: Joi.string().max(50).required(),
});

export { createSatuanBarangValidation };
