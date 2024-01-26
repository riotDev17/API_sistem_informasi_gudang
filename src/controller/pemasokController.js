import pemasokService from '../service/pemasokService.js';

// GET
const getPemasokController = async (req, res, next) => {
  try {
    const result = await pemasokService.getPemasokService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Pemasok!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// GET BY ID
const getPemasokByIdController = async (req, res, next) => {
  try {
    const { pemasokId } = req.params;
    const result = await pemasokService.getPemasokByIdService(pemasokId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Pemasok Berdasarkan ID!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// POST
const createPemasokController = async (req, res, next) => {
  try {
    const request = req.body;
    const result = await pemasokService.createPemasokService(request);
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Menambahkan Data Pemasok!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// PUT
const updatePemasokController = async (req, res, next) => {
  try {
    const { pemasokId } = req.params;
    const request = req.body;
    request.id_pemasok = pemasokId;
    const result = await pemasokService.updatePemasokService(request);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Memperbarui Data Pemasok!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// DELETE
const deletePemasokController = async (req, res, next) => {
  try {
    const { pemasokId } = req.params;
    await pemasokService.deletePemasokService(pemasokId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Pemasok!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getPemasokController,
  createPemasokController,
  getPemasokByIdController,
  updatePemasokController,
  deletePemasokController,
};
