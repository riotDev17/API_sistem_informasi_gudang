import pemasokService from '../service/pemasokService.js';

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
  createPemasokController,
};
