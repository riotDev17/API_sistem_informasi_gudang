import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createSatuanBarangValidation,
  getSatuanBarangValidation,
  updateSatuanBarangValidation,
} from '../validation/satuanBarangValidation.js';

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

// GET BY ID
const getSatuanBarangByIdService = async (satuanBarangId) => {
  satuanBarangId = await validation(getSatuanBarangValidation, satuanBarangId);

  const satuanBarang = await prismaClient.satuanBarang.findFirst({
    where: {
      id_satuan_barang: satuanBarangId,
    },
    select: {
      id_satuan_barang: true,
      nama_satuan_barang: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!satuanBarang) {
    throw new ResponseError(404, 'Satuan Barang Tidak Ditemukan!');
  }

  return satuanBarang;
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
    throw new ResponseError(409, 'Satuan Barang Sudah Ada!');
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

// PUT
const updateSatuanBarangService = async (request) => {
  const satuanBarang = await validation(updateSatuanBarangValidation, request);
  const satuanBarangExist = await prismaClient.satuanBarang.count({
    where: {
      id_satuan_barang: satuanBarang.id_satuan_barang,
    },
  });

  if (satuanBarangExist !== 1) {
    throw new ResponseError(404, 'Satuan Barang Tidak Ditemukan!');
  }

  return prismaClient.satuanBarang.update({
    where: {
      id_satuan_barang: satuanBarang.id_satuan_barang,
    },
    data: satuanBarang,
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
  getSatuanBarangByIdService,
  createSatuanBarangService,
  updateSatuanBarangService,
};
