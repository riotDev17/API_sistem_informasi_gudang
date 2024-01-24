import barangMasukService from '../service/barangMasukService.js';

// GET
const getBarangMasukController = async (req, res, next) => {
  try {
    const result = await barangMasukService.getBarangMasukService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Barang Masuk!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// POST
const createBarangMasukController = async (req, res, next) => {
  try {
    const barangMasuk = req.body;
    const result =
      await barangMasukService.createBarangMasukService(barangMasuk);
    res.status(201).json({
      status: 'success',
      message: 'Barang Masuk Berhasil Ditambahkan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getBarangMasukController,
  createBarangMasukController,
};
