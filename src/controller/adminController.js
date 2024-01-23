import adminService from '../service/adminService.js';

const registerAdminController = async (req, res, next) => {
  try {
    const result = await adminService.registerAdminService(req.body);
    res.status(200).json({
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

export default {
  registerAdminController,
  loginAdminController,
};
