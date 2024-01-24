import Joi from 'joi';

const createBarangValidation = Joi.object({
  kode_barang: Joi.string().max(50).required(),
  nama_barang: Joi.string().max(50).required(),
  id_kategori_barang: Joi.string().max(50).required(),
  stok_barang: Joi.number().required(),
  id_satuan_barang: Joi.string().max(50).required(),
  lokasi_barang: Joi.string().max(50).required(),
  id_pemasok: Joi.string().max(50).required(),
  keterangan_barang: Joi.string().required(),
  foto_barang: Joi.string().required(),
});

const getBarangValidation = Joi.string().max(50).required();

export { createBarangValidation, getBarangValidation };
