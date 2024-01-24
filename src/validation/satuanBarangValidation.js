import Joi from 'joi';

const createSatuanBarangValidation = Joi.object({
  nama_satuan_barang: Joi.string().max(50).required(),
});

const updateSatuanBarangValidation = Joi.object({
  id_satuan_barang: Joi.string().max(100).required(),
  nama_satuan_barang: Joi.string().max(50).required(),
});

const getSatuanBarangValidation = Joi.string().max(50).required();

export {
  createSatuanBarangValidation,
  updateSatuanBarangValidation,
  getSatuanBarangValidation,
};
