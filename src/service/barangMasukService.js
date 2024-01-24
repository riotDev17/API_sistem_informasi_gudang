import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createBarangMasukValidation } from '../validation/barangMasukValidation.js';

// POST
const createBarangMasukService = async (request) => {
  const barangMasuk = await validation(createBarangMasukValidation, request);
  return prismaClient.barangMasuk.create({
    data: barangMasuk,
    select: {
      id_barang_masuk: true,
      tanggal_barang_masuk: true,
      barang: {
        select: {
          id_barang: true,
          kode_barang: true,
          nama_barang: true,
          pemasok: {
            select: {
              id_pemasok: true,
              nama_pemasok: true,
            },
          },
        },
      },
      jumlah_barang_masuk: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  createBarangMasukService,
};
