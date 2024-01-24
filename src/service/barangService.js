import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createBarangValidation } from '../validation/barangValidation.js';

// POST
const createBarangService = async (request) => {
  const barang = await validation(createBarangValidation, request);
  const barangExist = await prismaClient.barang.count({
    where: {
      nama_barang: barang.nama_barang,
    },
  });

  if (barangExist === 1) {
    throw new ResponseError(409, 'Nama Barang Sudah Ada');
  }

  return prismaClient.barang.create({
    data: barang,
    select: {
      id_barang: true,
      kode_barang: true,
      nama_barang: true,
      kategori_barang: {
        select: {
          id_kategori_barang: true,
          nama_kategori_barang: true,
        },
      },
      stok_barang: true,
      satuan_barang: {
        select: {
          id_satuan_barang: true,
          nama_satuan_barang: true,
        },
      },
      lokasi_barang: true,
      pemasok: {
        select: {
          id_pemasok: true,
          nama_pemasok: true,
        },
      },
      foto_barang: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  createBarangService,
};
