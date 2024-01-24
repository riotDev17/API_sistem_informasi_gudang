import Joi from 'joi';

const createPengambilanBarangValidation = Joi.object({
  tanggal_pengambilan_barang: Joi.string().max(50).required(),
  id_barang: Joi.string().max(50).required(),
  id_karyawan: Joi.string().max(50).required(),
  jumlah_pengambilan_barang: Joi.number().required(),
});

export { createPengambilanBarangValidation };
