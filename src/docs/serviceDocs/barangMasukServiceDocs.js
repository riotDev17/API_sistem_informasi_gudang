// GET
/**
 * @openapi
 * components:
 *   schemas:
 *     Get All Barang Masuk Success:
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
 *               id_barang_masuk:
 *                 type: string
 *                 description: id barang masuk
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
 *                     description: kode barang
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

// POST
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Barang Masuk:
 *       type: object
 *       properties:
 *         id_barang:
 *           type: string
 *           description: id barang
 *         tanggal_barang_masuk:
 *           type: string
 *           description: tanggal barang masuk
 *         jumlah_barang_masuk:
 *           type: integer
 *           description: jumlah barang masuk
 *         id_pemasok:
 *           type: string
 *           description: id pemasok
 *     Create Barang Masuk Success:
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
 *               id_barang_masuk:
 *                 type: string
 *                 description: id barang masuk
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
 *                     description: kode barang
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

// GET BY ID
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Barang Masuk By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: Success
 *         message:
 *           type: string
 *           example: Message Success
 *         data:
 *           type: object
 *           properties:
 *             id_barang_masuk:
 *               type: string
 *               description: id barang masuk
 *             tanggal_barang_masuk:
 *               type: string
 *               description: tanggal barang masuk
 *             barang:
 *               type: object
 *               properties:
 *                 id_barang:
 *                   type: string
 *                   description: id barang
 *                 kode_barang:
 *                   type: string
 *                   description: kode barang
 *                 nama_barang:
 *                   type: string
 *                   description: nama barang
 *                 pemasok:
 *                   type: object
 *                   properties:
 *                     id_pemasok:
 *                       type: string
 *                       description: id pemasok
 *                     nama_pemasok:
 *                       type: string
 *                       description: nama pemasok
 *             jumlah_barang_masuk:
 *               type: integer
 *               description: jumlah barang masuk
 *             createdAt:
 *               type: string
 *               description: tanggal dibuat
 *             updatedAt:
 *               type: string
 *               description: tanggal diupdate
 *
 *
 */

// PUT
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Barang Masuk:
 *       type: object
 *       properties:
 *         id_barang:
 *           type: string
 *           description: id barang
 *         tanggal_barang_masuk:
 *           type: string
 *           description: tanggal barang masuk
 *         jumlah_barang_masuk:
 *           type: integer
 *           description: jumlah barang masuk
 *         id_pemasok:
 *           type: string
 *           description: id pemasok
 *     Update Barang Masuk Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: Success
 *         message:
 *           type: string
 *           example: Message Success
 *         data:
 *           type: object
 *           properties:
 *             id_barang_masuk:
 *               type: string
 *               description: id barang masuk
 *             tanggal_barang_masuk:
 *               type: string
 *               description: tanggal barang masuk
 *             barang:
 *               type: object
 *               properties:
 *                 id_barang:
 *                   type: string
 *                   description: id barang
 *                 kode_barang:
 *                   type: string
 *                   description: kode barang
 *                 nama_barang:
 *                   type: string
 *                   description: nama barang
 *                 pemasok:
 *                   type: object
 *                   properties:
 *                     id_pemasok:
 *                       type: string
 *                       description: id pemasok
 *                     nama_pemasok:
 *                       type: string
 *                       description: nama pemasok
 *             jumlah_barang_masuk:
 *               type: integer
 *               description: jumlah barang masuk
 *             createdAt:
 *               type: string
 *               description: tanggal dibuat
 *             updatedAt:
 *               type: string
 *               description: tanggal diupdate
 *
 *
 */

// DELETE
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Barang Masuk Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *           example: Success
 *         message:
 *           type: string
 *           example: Message Success
 *
 *
 */