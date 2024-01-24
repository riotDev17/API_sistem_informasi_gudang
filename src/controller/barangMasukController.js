import barangMasukService from '../service/barangMasukService.js';

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
  createBarangMasukController,
};
