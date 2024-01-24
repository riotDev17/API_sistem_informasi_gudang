import Joi from 'joi';

const createKategoriBarangValidation = Joi.object({
  nama_kategori_barang: Joi.string().max(50).required(),
});

const getKategoriBarangValidation = Joi.string().max(50).required();

export { createKategoriBarangValidation, getKategoriBarangValidation };
