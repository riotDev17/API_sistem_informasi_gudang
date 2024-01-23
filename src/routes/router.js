import express from 'express';
import { authMiddleware } from '../middleware/authMiddleware.js';
import adminController from '../controller/adminController.js';

const router = express.Router();
router.use(authMiddleware);

// ADMIN
router.get('/api/admin', adminController.getAdminController);
router.put('/api/admin/:adminId', adminController.updateAdminController);
router.delete('/api/admin/logout', adminController.logoutAdminController);

export { router };
