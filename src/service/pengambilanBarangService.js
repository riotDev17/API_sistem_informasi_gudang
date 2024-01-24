import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createPengambilanBarangValidation } from '../validation/pengambilanBarangValidation.js';

// GET
const getPengambilanBarangService = async () => {
  return prismaClient.pengambilanBarang.findMany({
    select: {
      id_pengambilan_barang: true,
      tanggal_pengambilan_barang: true,
      barang: {
        select: {
          id_barang: true,
          kode_barang: true,
          nama_barang: true,
        },
      },
      karyawan: {
        select: {
          id_karyawan: true,
          no_karyawan: true,
          nama_karyawan: true,
        },
      },
      jumlah_pengambilan_barang: true,
      createdAt: true,
      updatedAt: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// POST
const createPengambilanBarangService = async (request) => {
  const pengambilanBarang = await validation(
    createPengambilanBarangValidation,
    request,
  );

  return prismaClient.pengambilanBarang.create({
    data: pengambilanBarang,
    select: {
      id_pengambilan_barang: true,
      tanggal_pengambilan_barang: true,
      barang: {
        select: {
          id_barang: true,
          kode_barang: true,
          nama_barang: true,
        },
      },
      karyawan: {
        select: {
          id_karyawan: true,
          no_karyawan: true,
          nama_karyawan: true,
        },
      },
      jumlah_pengambilan_barang: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default {
  getPengambilanBarangService,
  createPengambilanBarangService,
};
