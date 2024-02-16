import laporanPengambilanBarangService from '../service/laporanPengambilanBarangService.js';

// GET
const getLaporanPengambilanBarangController = async (req, res, next) => {
  try {
    const result =
      await laporanPengambilanBarangService.getLaporanPengambilanBarangService();
    res.status(200).json({
      success: true,
      message: 'Success Mendapatkan Semua Laporan Pengambilan Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getLaporanPengambilanBarangController,
};
