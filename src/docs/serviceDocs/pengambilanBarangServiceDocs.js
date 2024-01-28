// GET
/**
 * @openapi
 * components:
 *  schemas:
 *    Get All Pengambilan Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Success
 *        message:
 *          type: string
 *          example: Message Success
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_pengambilan_barang:
 *                type: string
 *                description: id pengambilan barang
 *              tanggal_pengambilan_barang:
 *                type: string
 *                description: tanggal pengambilan barang
 *              barang:
 *                type: object
 *                properties:
 *                  id_barang:
 *                    type: string
 *                    description: id barang
 *                  kode_barang:
 *                    type: string
 *                    description: kode barang
 *                  nama_barang:
 *                    type: string
 *                    description: nama barang
 *                  keterangan_barang:
 *                    type: string
 *                    description: keterangan barang
 *              karyawan:
 *                type: object
 *                properties:
 *                  id_karyawan:
 *                    type: string
 *                    description: id karyawan
 *                  no_karyawan:
 *                    type: string
 *                    description: no karyawan
 *                  nama_karyawan:
 *                    type: string
 *                    description: nama karyawan
 *              jumlah_pengambilan_barang:
 *                type: integer
 *                description: jumlah pengambilan barang
 *              createdAt:
 *                type: string
 *                description: tanggal dibuat
 *              updatedAt:
 *                type: string
 *                description: tanggal diupdate
 *
 *
 */

// POST
/**
 * @openapi
 * components:
 *  schemas:
 *    Create Pengambilan Barang:
 *      type: object
 *      properties:
 *        tanggal_pengambilan_barang:
 *          type: string
 *          description: tanggal pengambilan barang
 *        id_barang:
 *          type: string
 *          description: id barang
 *        id_karyawan:
 *          type: string
 *          description: id karyawan
 *        jumlah_pengambilan_barang:
 *          type: integer
 *          description: jumlah pengambilan barang
 *    Create Pengambilan Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Success
 *        message:
 *          type: string
 *          example: Message Success
 *        data:
 *          type: object
 *          properties:
 *            id_pengambilan_barang:
 *              type: string
 *              description: id pengambilan barang
 *            tanggal_pengambilan_barang:
 *              type: string
 *              description: tanggal pengambilan barang
 *            barang:
 *              type: object
 *              properties:
 *                id_barang:
 *                  type: string
 *                  description: id barang
 *                kode_barang:
 *                  type: string
 *                  description: kode barang
 *                nama_barang:
 *                  type: string
 *                  description: nama barang
 *                keterangan_barang:
 *                  type: string
 *                  description: keterangan barang
 *            karyawan:
 *              type: object
 *              properties:
 *                id_karyawan:
 *                  type: string
 *                  description: id karyawan
 *                no_karyawan:
 *                  type: string
 *                  description: no karyawan
 *                nama_karyawan:
 *                  type: string
 *                  description: nama karyawan
 *            jumlah_pengambilan_barang:
 *              type: integer
 *              description: jumlah pengambilan barang
 *            createdAt:
 *              type: string
 *              description: tanggal dibuat
 *            updatedAt:
 *              type: string
 *              description: tanggal diupdate
 *
 *
 */

// DELETE ALL
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete All Pengambilan Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Success
 *        message:
 *          type: string
 *          example: Message Success
 *
 *
 */

// DELETE
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Pengambilan Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Success
 *        message:
 *          type: string
 *          example: Message Success
 *
 *
 */
