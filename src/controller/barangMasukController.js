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

// DELETE BY ID
const deleteBarangMasukByIdController = async (req, res, next) => {
  try {
    const { barangMasukId } = req.params;
    await barangMasukService.deleteBarangMasukByIdService(barangMasukId);
    res.status(200).json({
      status: 'Success',
      message: 'Barang Masuk Berhasil Dihapus!',
    });
  } catch (error) {
    next(error);
  }
};

// DELETE MANY
const deleteBarangMasukManyController = async (req, res, next) => {
  try {
    await barangMasukService.deleteBarangMasukManyService();
    res.status(200).json({
      status: 'Success',
      message: 'Semua Data Barang Masuk Berhasil Dihapus!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getBarangMasukController,
  createBarangMasukController,
  deleteBarangMasukByIdController,
  deleteBarangMasukManyController,
};
