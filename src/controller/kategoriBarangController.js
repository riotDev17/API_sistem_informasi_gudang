import kategoriBarangService from '../service/kategoriBarangService.js';

// GET
const getKategoriBarangController = async (req, res, next) => {
  try {
    const result = await kategoriBarangService.getKategoriBarangService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Kategori Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// POST
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

export default { getKategoriBarangController, createKategoriBarangController };
