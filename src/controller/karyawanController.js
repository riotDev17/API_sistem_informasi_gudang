import multer from 'multer';
import uploadFile from '../utils/multer.js';
import karyawanService from '../service/karyawanService.js';

const getKaryawanController = async (req, res, next) => {
  try {
    const result = await karyawanService.getKaryawanService();
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Semua Data karyawan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getKaryawanByIdController = async (req, res, next) => {
  try {
    const { karyawanId } = req.params;
    const result = await karyawanService.getKaryawanByIdService(karyawanId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Mendapatkan Data karyawan!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const createKaryawanController = async (req, res, next) => {
  try {
    uploadFile.single('foto_karyawan')(req, res, async (error) => {
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
        request.foto_karyawan = req.file.path;
      }

      try {
        const result = await karyawanService.createKaryawanService(request);
        res.status(201).json({
          status: 'Success',
          message: 'Berhasil Menambahkan Data karyawan!',
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

const updateKaryawanController = async (req, res, next) => {
  try {
    uploadFile.single('foto_karyawan')(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: error.message,
        });
      } else if (error) {
        next(error);
      }

      const { karyawanId } = req.params;
      const request = req.body;
      request.id_karyawan = karyawanId;

      if (req.file) {
        request.foto_karyawan = req.file.path;
      }

      try {
        const result = await karyawanService.updateKaryawanService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Mengubah Data karyawan!',
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

const deleteKaryawanController = async (req, res, next) => {
  try {
    const { karyawanId } = req.params;
    await karyawanService.deleteKaryawanService(karyawanId);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Menghapus Data karyawan!',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  getKaryawanController,
  getKaryawanByIdController,
  createKaryawanController,
  updateKaryawanController,
  deleteKaryawanController,
};
