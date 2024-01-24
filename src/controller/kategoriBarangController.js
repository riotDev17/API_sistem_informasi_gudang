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

// GET BY ID
const getKategoriBarangByIdController = async (req, res, next) => {
  try {
    const { kategoriBarangId } = req.params;
    const result =
      await kategoriBarangService.getKategoriBarangByIdService(
        kategoriBarangId,
      );
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Kategori Barang Berdasarkan ID!',
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

// PUT
const updateKategoriBarangController = async (req, res, next) => {
  try {
    const { kategoriBarangId } = req.params;
    const request = req.body;
    request.id_kategori_barang = kategoriBarangId;
    const result =
      await kategoriBarangService.updateKategoriBarangService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mengubah Data Kategori Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const deleteKategoriBarangController = async (req, res, next) => {
  try {
    const { kategoriBarangId } = req.params;
    await kategoriBarangService.deleteKategoriBarangService(kategoriBarangId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Kategori Barang!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getKategoriBarangController,
  getKategoriBarangByIdController,
  createKategoriBarangController,
  updateKategoriBarangController,
  deleteKategoriBarangController,
};
