import { validation } from '../validation/validation.js';
import { prismaClient } from '../app/database.js';
import { ResponseError } from '../error/responseError.js';
import { createKategoriBarangValidation } from '../validation/kategoriBarangValidation.js';

const createKategoriBarangService = async (request) => {
  const kategoriBarang = await validation(
    createKategoriBarangValidation,
    request,
  );

  const kategoriBarangExist = await prismaClient.kategoriBarang.count({
    where: {
      nama_kategoriBarang: kategoriBarang.nama_kategoriBarang,
    },
  });

  if (kategoriBarangExist === 1) {
    throw new ResponseError(409, 'Nama Kategori Barang Sudah Ada');
  }

  return prismaClient.kategoriBarang.create({
    data: kategoriBarang,
    select: {
      id_kategori_barang: true,
      nama_kategori_barang: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export default { createKategoriBarangService };
