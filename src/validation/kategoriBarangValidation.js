import Joi from 'joi';

const createKategoriBarangValidation = Joi.object({
  nama_kategori_barang: Joi.string().max(50).required(),
});

const updateKategoriBarangValidation = Joi.object({
  id_kategori_barang: Joi.string().max(100).required(),
  nama_kategori_barang: Joi.string().max(50).required(),
});

const getKategoriBarangValidation = Joi.string().max(50).required();
const deleteKategoriBarangValidation = Joi.string().max(50).required();

export {
  createKategoriBarangValidation,
  updateKategoriBarangValidation,
  getKategoriBarangValidation,
  deleteKategoriBarangValidation,
};
