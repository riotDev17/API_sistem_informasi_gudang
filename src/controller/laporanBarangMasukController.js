import laporanBarangMasukService from '../service/laporanBarangMasukService.js';

// GET
const getLaporanBarangMasukController = async (req, res, next) => {
  try {
    const result =
      await laporanBarangMasukService.getLaporanBarangMasukService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Barang Masuk!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getLaporanBarangMasukController,
};
