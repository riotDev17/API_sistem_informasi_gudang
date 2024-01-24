import kategoriBarangService from '../service/kategoriBarangService.js';

const createKategoriBarangController = async (req, res, next) => {
  try {
    const request = req.body;
    const result =
      await kategoriBarangService.createKategoriBarangService(request);
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Kategori Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default { createKategoriBarangController };
