import express from 'express';
import adminController from '../controller/adminController.js';
import agamaController from '../controller/agamaController.js';
import pemasokController from '../controller/pemasokController.js';
import karyawanController from '../controller/karyawanController.js';
import satuanBarangController from '../controller/satuanBarangController.js';
import kategoriBarangController from '../controller/kategoriBarangController.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import barangController from '../controller/barangController.js';

const router = express.Router();
router.use(authMiddleware);

// ADMIN
router.get('/api/admin', adminController.getAdminController);
router.put('/api/admin/:adminId', adminController.updateAdminController);
router.delete('/api/admin/logout', adminController.logoutAdminController);

// AGAMA
router.get('/api/agama', agamaController.getAgamaController);
router.post('/api/agama', agamaController.createAgamaController);
router.get('/api/agama/:agamaId', agamaController.getAgamaByIdController);
router.put('/api/agama/:agamaId', agamaController.updateAgamaController);
router.delete('/api/agama/:agamaId', agamaController.deleteAgamaController);

// KARYAWAN
router.get('/api/karyawan', karyawanController.getKaryawanController);
router.get(
  '/api/karyawan/:karyawanId',
  karyawanController.getKaryawanByIdController,
);
router.post('/api/karyawan', karyawanController.createKaryawanController);
router.put(
  '/api/karyawan/:karyawanId',
  karyawanController.updateKaryawanController,
);
router.delete(
  '/api/karyawan/:karyawanId',
  karyawanController.deleteKaryawanController,
);

// KATEGORI BARANG
router.get(
  '/api/kategori-barang',
  kategoriBarangController.getKategoriBarangController,
);
router.get(
  '/api/kategori-barang/:kategoriBarangId',
  kategoriBarangController.getKategoriBarangByIdController,
);
router.post(
  '/api/kategori-barang',
  kategoriBarangController.createKategoriBarangController,
);
router.put(
  '/api/kategori-barang/:kategoriBarangId',
  kategoriBarangController.updateKategoriBarangController,
);
router.delete(
  '/api/kategori-barang/:kategoriBarangId',
  kategoriBarangController.deleteKategoriBarangController,
);

// SATUAN BARANG
router.get(
  '/api/satuan-barang',
  satuanBarangController.getSatuanBarangController,
);
router.get(
  '/api/satuan-barang/:satuanBarangId',
  satuanBarangController.getSatuanBarangByIdController,
);
router.post(
  '/api/satuan-barang',
  satuanBarangController.createSatuanBarangController,
);
router.put(
  '/api/satuan-barang/:satuanBarangId',
  satuanBarangController.updateSatuanBarangController,
);
router.delete(
  '/api/satuan-barang/:satuanBarangId',
  satuanBarangController.deleteSatuanBarangController,
);

// PEMASOK
router.get('/api/pemasok', pemasokController.getPemasokController);
router.get(
  '/api/pemasok/:pemasokId',
  pemasokController.getPemasokByIdController,
);
router.post('/api/pemasok', pemasokController.createPemasokController);
router.put(
  '/api/pemasok/:pemasokId',
  pemasokController.updatePemasokController,
);
router.delete(
  '/api/pemasok/:pemasokId',
  pemasokController.deletePemasokController,
);

// BARANG
router.get('/api/barang', barangController.getBarangController);
router.get('/api/barang/:barangId', barangController.getBarangByIdController);
router.post('/api/barang', barangController.createBarangController);
router.put('/api/barang/:barangId', barangController.updateBarangController);
router.delete('/api/barang/:barangId', barangController.deleteBarangController);

export { router };
