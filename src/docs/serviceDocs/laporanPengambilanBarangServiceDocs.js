// GET
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Laporan Pengambilan Barang Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: Success
 *         message:
 *           type: string
 *           example: Message Success
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_laporan_pengambilan_barang:
 *                 type: string
 *                 description: id laporan pengambilan barang
 *               tanggal_pengambilan_barang:
 *                 type: string
 *                 description: tanggal pengambilan barang
 *               barang:
 *                 type: object
 *                 properties:
 *                   id_barang:
 *                     type: string
 *                     description: id barang
 *                   kode_barang:
 *                     type: string
 *                     description: kode barang
 *                   nama_barang:
 *                     type: string
 *                     description: nama barang
 *                   keterangan_barang:
 *                     type: string
 *                     description: keterangan barang
 *               karyawan:
 *                 type: object
 *                 properties:
 *                   id_karyawan:
 *                     type: string
 *                     description: id karyawan
 *                   no_karyawan:
 *                     type: string
 *                     description: no karyawan
 *                   nama_karyawan:
 *                     type: string
 *                     description: nama karyawan
 *               jumlah_pengambilan_barang:
 *                 type: integer
 *                 description: jumlah pengambilan barang
 *               createdAt:
 *                 type: string
 *                 description: tanggal dibuat
 *               updatedAt:
 *                 type: string
 *                 description: tanggal diupdate 
 * 
 */