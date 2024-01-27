import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { randomNumber } from '../helpers/randomNumber.js';
import { ResponseError } from '../error/responseError.js';
import {
  createKaryawanValidation,
  deleteKaryawanValidation,
  getKarwayanValidation,
  updateKaryawanValidation,
} from '../validation/karyawanValidation.js';

// GET
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
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// GET BY ID
const getKaryawanByIdService = async (karyawanID) => {
  karyawanID = await validation(getKarwayanValidation, karyawanID);
  const karyawan = await prismaClient.karyawan.findUnique({
    where: {
      id_karyawan: karyawanID,
    },
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

  if (!karyawan) {
    throw new ResponseError(404, 'Data Karyawan Tidak Ditemukan!');
  }

  return karyawan;
};

// POST
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

// PUT
const updateKaryawanService = async (request) => {
  const karyawan = await validation(updateKaryawanValidation, request);
  const karyawanExist = await prismaClient.karyawan.findUnique({
    where: {
      id_karyawan: karyawan.id_karyawan,
    },
  });

  if (!karyawanExist) {
    throw new ResponseError(404, 'Data Karyawan Tidak Ditemukan!');
  }

  return prismaClient.karyawan.update({
    where: {
      id_karyawan: karyawan.id_karyawan,
    },
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

// DELETE
const deleteKaryawanService = async (karyawanID) => {
  karyawanID = await validation(deleteKaryawanValidation, karyawanID);
  const karyawanExist = await prismaClient.karyawan.count({
    where: {
      id_karyawan: karyawanID,
    },
  });

  if (!karyawanExist) {
    throw new ResponseError(404, 'Data Karyawan Tidak Ditemukan!');
  }

  return prismaClient.karyawan.delete({
    where: {
      id_karyawan: karyawanID,
    },
  });
};

export default {
  getKaryawanService,
  getKaryawanByIdService,
  createKaryawanService,
  updateKaryawanService,
  deleteKaryawanService,
};
