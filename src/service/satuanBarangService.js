import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createSatuanBarangValidation } from '../validation/satuanBarangValidation.js';

// GET
const getSatuanBarangService = async () => {
  return prismaClient.satuanBarang.findMany({
    select: {
      id_satuan_barang: true,
      nama_satuan_barang: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// POST
const createSatuanBarangService = async (request) => {
  const satuanBarang = await validation(createSatuanBarangValidation, request);
  const satuanBarangExist = await prismaClient.satuanBarang.count({
    where: {
      nama_satuan_barang: satuanBarang.nama_satuan_barang,
    },
  });

  if (satuanBarangExist) {
    throw new ResponseError(409, 'Satuan Barang Sudah Ada');
  }

  return prismaClient.satuanBarang.create({
    data: {
      nama_satuan_barang: satuanBarang.nama_satuan_barang,
    },
    select: {
      id_satuan_barang: true,
      nama_satuan_barang: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  getSatuanBarangService,
  createSatuanBarangService,
};
