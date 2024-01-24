import pengambilanBarangService from '../service/pengambilanBarangService.js';

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
  createPengambilanBarangController,
};
