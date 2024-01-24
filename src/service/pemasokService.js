import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createPemasokValidation,
  getPemasokValidation,
  updatePemasokValidation,
  //   deletePemasokValidation,
} from '../validation/pemasokValidation.js';

// GET
const getPemasokService = async () => {
  return prismaClient.pemasok.findMany({
    select: {
      id_pemasok: true,
      nama_pemasok: true,
      nama_kontak_pemasok: true,
      no_telp_pemasok: true,
      alamat_pemasok: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

// GET BY ID
const getPemasokByIdService = async (pemasokId) => {
  pemasokId = await validation(getPemasokValidation, pemasokId);
  const pemasok = await prismaClient.pemasok.findFirst({
    where: {
      id_pemasok: pemasokId,
    },
  });

  if (!pemasok) {
    throw new ResponseError(404, 'Data Pemasok Tidak Ditemukan!');
  }

  return pemasok;
};

// POST
const createPemasokService = async (request) => {
  const pemasok = await validation(createPemasokValidation, request);
  const pemasokExist = await prismaClient.pemasok.count({
    where: {
      nama_pemasok: pemasok.nama_pemasok,
    },
  });

  if (pemasokExist) {
    throw new ResponseError(409, 'Data Pemasok Sudah Ada!');
  }

  pemasok.no_telp_pemasok = `+62${pemasok.no_telp_pemasok}`;

  return prismaClient.pemasok.create({
    data: pemasok,
    select: {
      id_pemasok: true,
      nama_pemasok: true,
      nama_kontak_pemasok: true,
      no_telp_pemasok: true,
      alamat_pemasok: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

// PUT
const updatePemasokService = async (request) => {
  const pemasok = await validation(updatePemasokValidation, request);
  const pemasokExist = await prismaClient.pemasok.findFirst({
    where: {
      id_pemasok: pemasok.id_pemasok,
    },
  });

  if (!pemasokExist) {
    throw new ResponseError(404, 'Data Pemasok Tidak Ditemukan!');
  }

  pemasok.no_telp_pemasok = `+62${pemasok.no_telp_pemasok}`;

  return prismaClient.pemasok.update({
    where: {
      id_pemasok: pemasok.id_pemasok,
    },
    data: pemasok,
    select: {
      id_pemasok: true,
      nama_pemasok: true,
      nama_kontak_pemasok: true,
      no_telp_pemasok: true,
      alamat_pemasok: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  getPemasokService,
  createPemasokService,
  getPemasokByIdService,
  updatePemasokService,
};
