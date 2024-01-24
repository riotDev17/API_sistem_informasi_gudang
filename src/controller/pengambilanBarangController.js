import pengambilanBarangService from '../service/pengambilanBarangService.js';

// GET
const getPengambilanBarangController = async (req, res, next) => {
  try {
    const result = await pengambilanBarangService.getPengambilanBarangService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Pengambilan Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// POST
const createPengambilanBarangController = async (req, res, next) => {
  try {
    const pengambilanBarang = req.body;
    const result =
      await pengambilanBarangService.createPengambilanBarangService(
        pengambilanBarang,
      );
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Pengambilan Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getPengambilanBarangController,
  createPengambilanBarangController,
};
