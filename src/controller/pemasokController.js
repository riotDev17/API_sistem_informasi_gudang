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

export default {
  getPemasokController,
  createPemasokController,
  getPemasokByIdController,
};
