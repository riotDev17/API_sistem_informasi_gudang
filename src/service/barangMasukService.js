import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createBarangMasukValidation,
  deleteBarangMasukValidation,
} from '../validation/barangMasukValidation.js';

// GET
const getBarangMasukService = async () => {
  return prismaClient.barangMasuk.findMany({
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
    orderBy: {
      createdAt: 'desc',
    },
  });
};

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

// DELETE BY ID
const deleteBarangMasukByIdService = async (barangMasukId) => {
  const barangMasuk = await prismaClient.barangMasuk.findUnique({
    where: {
      id_barang_masuk: barangMasukId,
    },
  });

  if (!barangMasuk) {
    throw new ResponseError(404, `Barang Masuk Tidak Ditemukan!`);
  }

  return prismaClient.barangMasuk.delete({
    where: {
      id_barang_masuk: barangMasukId,
    },
  });
};

// DELETE MANY
const deleteBarangMasukManyService = async () => {
  const barangMasuk = await prismaClient.barangMasuk.findMany();

  const deleteBarangMasuk = await prismaClient.barangMasuk.deleteMany();
  for (const barang of barangMasuk) {
    await prismaClient.laporanBarangMasuk.create({
      data: {
        id_barang: barang.id_barang,
        tanggal_barang_masuk: barang.tanggal_barang_masuk,
        jumlah_barang_masuk: barang.jumlah_barang_masuk,
      },
    });
  }

  return deleteBarangMasuk;
};

export default {
  getBarangMasukService,
  createBarangMasukService,
  deleteBarangMasukByIdService,
  deleteBarangMasukManyService,
};
