import multer from 'multer';
import uploadFile from '../utils/multer.js';
import adminService from '../service/adminService.js';
import { ResponseError } from '../error/responseError.js';

const registerAdminController = async (req, res, next) => {
  try {
    const result = await adminService.registerAdminService(req.body);
    res.status(201).json({
      status: 'Success',
      message: 'Berhasil Register!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const loginAdminController = async (req, res, next) => {
  try {
    const result = await adminService.loginAdminService(req.body);
    const { token } = result;
    res.cookie('token', token, {
      maxAge: 60 * 60 * 24 * 1000,
      httpOnly: true,
    });
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Login!',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const updateAdminController = async (req, res, next) => {
  try {
    uploadFile.single('foto_admin')(req, res, async (error) => {
      if (error instanceof multer.MulterError) {
        res.status(400).json({
          status: 'Error',
          message: error.message,
        });
      } else if (error) {
        next(error);
      }

      const { adminId } = req.params;
      const request = req.body;
      request.id_admin = adminId;

      if (req.file) {
        request.foto_admin = req.file.path;
      }

      try {
        const result = await adminService.updateAdminService(request);
        res.status(200).json({
          status: 'Success',
          message: 'Berhasil Mengupdate Data Admin',
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

const logoutAdminController = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      throw new ResponseError(401, 'Token tidak ditemukan , gagal logout!');
    }

    const username = req.admin.username;
    await adminService.logoutAdminService(username);
    res.clearCookie('token');
    res.status(200).json({
      status: 'success',
      message: 'Berhasil logout',
    });
  } catch (error) {
    next(error);
  }
};

export default {
  registerAdminController,
  loginAdminController,
  updateAdminController,
  logoutAdminController,
};
