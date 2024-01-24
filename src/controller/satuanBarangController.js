import satuanBarangService from '../service/satuanBarangService.js';

// POST
const createSatuanBarangController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await satuanBarangService.createSatuanBarangService(request);
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Satuan Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  createSatuanBarangController,
};
