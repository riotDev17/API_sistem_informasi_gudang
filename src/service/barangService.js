import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import {
  createBarangValidation,
  deleteBarangValidation,
  getBarangValidation,
  updateBarangValidation,
} from '../validation/barangValidation.js';

// GET
const getBarangService = async () => {
  return prismaClient.barang.findMany({
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
    orderBy: {
      createdAt: 'desc',
    },
  });
};

// GET BY ID
const getBarangByIdService = async (barangId) => {
  barangId = await validation(getBarangValidation, barangId);
  const barang = await prismaClient.barang.findUnique({
    where: {
      id_barang: barangId,
    },
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

  if (!barang) {
    throw new ResponseError(404, 'Barang Tidak Ditemukan!');
  }

  return barang;
};

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

// PUT
const updateBarangService = async (request) => {
  const barang = await validation(updateBarangValidation, request);
  const barangExist = await prismaClient.barang.findUnique({
    where: {
      id_barang: barang.id_barang,
    },
  });

  if (!barangExist) {
    throw new ResponseError(404, 'Barang Tidak Ditemukan!');
  }

  return prismaClient.barang.update({
    where: {
      id_barang: barang.id_barang,
    },
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

// DELETE
const deleteBarangService = async (barangId) => {
  barangId = await validation(deleteBarangValidation, barangId);
  const barangExist = await prismaClient.barang.findUnique({
    where: {
      id_barang: barangId,
    },
  });

  if (!barangExist) {
    throw new ResponseError(404, 'Barang Tidak Ditemukan!');
  }

  return prismaClient.barang.delete({
    where: {
      id_barang: barangId,
    },
  });
};

export default {
  getBarangService,
  getBarangByIdService,
  createBarangService,
  updateBarangService,
  deleteBarangService,
};
