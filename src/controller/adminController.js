import adminService from '../service/adminService.js';

const registerAdminController = async (req, res, next) => {
  try {
    const result = await adminService.registerAdminService(req.body);
    res.status(200).json({
      status: 'Success',
      message: 'Berhasil Register',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  registerAdminController,
};
