import Joi from 'joi';

const createKaryawanValidation = Joi.object({
  nama_karyawan: Joi.string().max(25).required(),
  jenis_kelamin: Joi.string().max(25).required(),
  tempat_lahir: Joi.string().required(),
  tanggal_lahir: Joi.string().max(25).required(),
  tanggal_masuk: Joi.string().max(25).required(),
  id_agama: Joi.string().max(50).required(),
  alamat: Joi.string().required(),
  no_telp: Joi.string().max(25).required(),
  foto_karyawan: Joi.string().required(),
});

const updateKaryawanValidation = Joi.object({
  id_karyawan: Joi.string().max(50).required(),
  nama_karyawan: Joi.string().max(25).required(),
  jenis_kelamin: Joi.string().max(25).required(),
  tempat_lahir: Joi.string().required(),
  tanggal_lahir: Joi.string().max(25).required(),
  tanggal_masuk: Joi.string().max(25).required(),
  id_agama: Joi.string().max(50).required(),
  alamat: Joi.string().required(),
  no_telp: Joi.string().max(25).required(),
  foto_karyawan: Joi.string().required(),
});

const getKarwayanValidation = Joi.string().max(50).required();
const deleteKaryawanValidation = Joi.string().max(50).required();

export {
  createKaryawanValidation,
  getKarwayanValidation,
  updateKaryawanValidation,
  deleteKaryawanValidation,
};
