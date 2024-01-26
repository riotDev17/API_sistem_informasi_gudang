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
          keterangan_barang: true,
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
          keterangan_barang: true,
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

// DELETE BY ID
const deletePengambilanBarangByIdService = async (pengambilanBarangId) => {
  const pengambilanBarang = await prismaClient.pengambilanBarang.findUnique({
    where: {
      id_pengambilan_barang: pengambilanBarangId,
    },
  });

  if (!pengambilanBarang) {
    throw new ResponseError(404, 'Pengambilan Barang Tidak Ditemukan');
  }

  return prismaClient.pengambilanBarang.delete({
    where: {
      id_pengambilan_barang: pengambilanBarangId,
    },
  });
};

// DELETE MANY
const deletePengambilanBarangManyService = async () => {
  const pengambilanBarang = await prismaClient.pengambilanBarang.findMany();

  const deletePengambilanBarang =
    await prismaClient.pengambilanBarang.deleteMany();

  for (const pengambilan of pengambilanBarang) {
    await prismaClient.laporanPengambilanBarang.create({
      data: {
        tanggal_pengambilan_barang: pengambilan.tanggal_pengambilan_barang,
        id_barang: pengambilan.id_barang,
        id_karyawan: pengambilan.id_karyawan,
        jumlah_pengambilan_barang: pengambilan.jumlah_pengambilan_barang,
      },
    });
  }

  return deletePengambilanBarang;
};

export default {
  getPengambilanBarangService,
  createPengambilanBarangService,
  deletePengambilanBarangByIdService,
  deletePengambilanBarangManyService,
};
