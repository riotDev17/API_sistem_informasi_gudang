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

export default { getKaryawanController, createKaryawanController };
