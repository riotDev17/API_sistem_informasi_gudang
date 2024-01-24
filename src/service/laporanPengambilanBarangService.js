import { prismaClient } from '../app/database.js';

// GET
const getLaporanPengambilanBarangService = async () => {
  return prismaClient.laporanPengambilanBarang.findMany({
    select: {
      id_laporan_pengambilan_barang: true,
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

export default {
  getLaporanPengambilanBarangService,
};
