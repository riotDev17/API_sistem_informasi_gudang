import Joi from 'joi';

const createBarangMasukValidation = Joi.object({
  tanggal_barang_masuk: Joi.string().max(50).required(),
  id_barang: Joi.string().max(50).required(),
  jumlah_barang_masuk: Joi.number().required(),
});

const deleteBarangMasukValidation = Joi.string().max(50).required();

export { createBarangMasukValidation, deleteBarangMasukValidation };
