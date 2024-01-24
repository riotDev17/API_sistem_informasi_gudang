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

// GET BY ID
const getBarangByIdController = async (req, res, next) => {
  try {
    const { barangId } = req.params;
    const result = await barangService.getBarangByIdService(barangId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data Barang Berdasarkan ID!',
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

// PUT
const updateBarangController = async (req, res, next) => {
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

      const { barangId } = req.params;
      const request = req.body;
      request.id_barang = barangId;

      if (req.file) {
        request.foto_barang = req.file.path;
      }

      try {
        const result = await barangService.updateBarangService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Mengubah Data Barang!',
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

// DELETE
const deleteBarangController = async (req, res, next) => {
  try {
    const { barangId } = req.params;
    await barangService.deleteBarangService(barangId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data Barang!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getBarangController,
  getBarangByIdController,
  createBarangController,
  updateBarangController,
  deleteBarangController,
};
