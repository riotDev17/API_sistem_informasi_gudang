import express from 'express';
import adminController from '../controller/adminController.js';

const auth = express.Router();

auth.post('/api/admin/register', adminController.registerAdminController);
// auth.post('/auth/admin/login', adminController.loginAdminController);

export { auth };
