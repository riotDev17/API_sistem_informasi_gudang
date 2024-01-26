// GET
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Laporan Barang Masuk Success:
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
 *               id_laporan_barang_masuk:
 *                 type: string
 *                 description: id laporan barang masuk
 *               tanggal_barang_masuk:
 *                 type: string
 *                 description: tanggal barang masuk
 *               barang:
 *                 type: object
 *                 properties:
 *                   id_barang:
 *                     type: string
 *                     description: id barang
 *                   kode_barang:
 *                     type: string
 *                     deription: kode barang
 *                   nama_barang:
 *                     type: string
 *                     description: nama barang
 *                   pemasok:
 *                     type: object
 *                     properties:
 *                       id_pemasok:
 *                         type: string
 *                         description: id pemasok
 *                       nama_pemasok:
 *                         type: string
 *                         description: nama pemasok
 *               jumlah_barang_masuk:
 *                 type: integer
 *                 description: jumlah barang masuk
 *               createdAt:
 *                 type: string
 *                 description: tanggal dibuat
 *               updatedAt:
 *                 type: string
 *                 description: tanggal diupdate
 *
 *
 */
