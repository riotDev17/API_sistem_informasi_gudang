import satuanBarangService from '../service/satuanBarangService.js';

// GET
const getSatuanBarangController = async (req, res, next) => {
  try {
    const result = await satuanBarangService.getSatuanBarangService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Satuan Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const getSatuanBarangByIdController = async (req, res, next) => {
  try {
    const { satuanBarangId } = req.params;
    const result =
      await satuanBarangService.getSatuanBarangByIdService(satuanBarangId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Satuan Barang Berdasarkan ID!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

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

// PUT
const updateSatuanBarangController = async (req, res, next) => {
  try {
    const { satuanBarangId } = req.params;
    const request = req.body;
    request.id_satuan_barang = satuanBarangId;
    const result = await satuanBarangService.updateSatuanBarangService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Memperbarui Data Satuan Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getSatuanBarangController,
  getSatuanBarangByIdController,
  createSatuanBarangController,
  updateSatuanBarangController,
};
