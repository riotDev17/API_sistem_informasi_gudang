import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createPemasokValidation,
  getPemasokValidation,
  //   deletePemasokValidation,
  //   updatePemasokValidation,
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

export default {
  getPemasokService,
  createPemasokService,
};
