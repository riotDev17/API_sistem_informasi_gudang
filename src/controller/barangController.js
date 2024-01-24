import multer from 'multer';
import barangService from '../service/barangService.js';
import uploadFile from '../utils/multer.js';

// GET
const getBarangController = async (req, res, next) => {
  try {
    const result = await barangService.getBarangService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data Barang!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

// POST
const createBarangController = async (req, res, next) => {
  try {
    uploadFile.single('foto_barang')(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: error.message,
        });
      } else if (error) {
        next(error);
      }

      const request = req.body;
      if (req.file) {
        request.foto_barang = req.file.path;
      }

      try {
        const result = await barangService.createBarangService(request);
        res.status(201).json({
          status: 'Success',
          message: 'Berhasil Menambahkan Data Barang!',
          data: result,
        });
      } catch (error) {
        next(error);
      }
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getBarangController,
  createBarangController,
};
