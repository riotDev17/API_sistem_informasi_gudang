import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { randomNumber } from '../helpers/randomNumber.js';
import { ResponseError } from '../error/responseError.js';
import { createKaryawanValidation } from '../validation/karyawanValidation.js';

const getKaryawanService = async () => {
  return prismaClient.karyawan.findMany({
    select: {
      id_karyawan: true,
      no_karyawan: true,
      nama_karyawan: true,
      jenis_kelamin: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      tanggal_masuk: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      alamat: true,
      no_telp: true,
      foto_karyawan: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

const createKaryawanService = async (request) => {
  const karyawan = await validation(createKaryawanValidation, request);
  const karyawanExist = await prismaClient.karyawan.count({
    where: {
      nama_karyawan: karyawan.nama_karyawan,
    },
  });

  if (karyawanExist === 1) {
    throw new ResponseError(409, 'Nama Karyawan Sudah Ada');
  }

  karyawan.no_karyawan = randomNumber();
  karyawan.no_telp = `+62${karyawan.no_telp}`;

  return prismaClient.karyawan.create({
    data: karyawan,
    select: {
      id_karyawan: true,
      no_karyawan: true,
      nama_karyawan: true,
      jenis_kelamin: true,
      tempat_lahir: true,
      tanggal_lahir: true,
      tanggal_masuk: true,
      agama: {
        select: {
          id_agama: true,
          nama_agama: true,
        },
      },
      alamat: true,
      no_telp: true,
      foto_karyawan: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default { getKaryawanService, createKaryawanService };
