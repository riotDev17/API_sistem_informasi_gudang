import { prismaClient } from '../app/database.js';

// GET
const getLaporanBarangMasukService = async () => {
  return prismaClient.laporanBarangMasuk.findMany({
    select: {
      id_laporan_barang_masuk: true,
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

export default {
  getLaporanBarangMasukService,
};
