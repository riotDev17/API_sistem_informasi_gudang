// GET
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Barang Success:
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
 *              id_barang:
 *                type: string
 *                description: id barang
 *              kode_barang:
 *                type: string
 *                description: kode barang
 *              nama_barang:
 *                type: string
 *                description: nama barang
 *              kategori:
 *                type: object
 *                properties:
 *                  id_kategori_barang:
 *                    type: string
 *                    description: id kategori barang
 *                  nama_kategori_barang:
 *                    type: string
 *                    description: nama kategori barang
 *              stok_barang:
 *                type: integer
 *                description: stok barang
 *              satuan:
 *                type: object
 *                properties:
 *                  id_satuan_barang:
 *                    type: string
 *                    description: id satuan barang
 *                  nama_satuan_barang:
 *                    type: string
 *                    description: nama satuan barang
 *              lokasi_barang:
 *                type: string
 *                description: lokasi barang
 *              pemasok:
 *                type: object
 *                properties:
 *                  id_pemasok:
 *                    type: string
 *                    description: id pemasok
 *                  nama_pemasok:
 *                    type: string
 *                    description: nama pemasok
 *              keterangan_barang:
 *                type: string
 *                description: keterangan barang
 *              foto_barang:
 *                type: string
 *                description: foto barang
 *              createdAt:
 *                type: string
 *                description: create date barang
 *              updatedAt:
 *                type: string
 *                description: update date barang
 *
 *
 */

// POST
/**
 * @openapi
 * components:
 *  schemas:
 *    Create Barang:
 *      type: object
 *      required:
 *        - kode_barang
 *        - nama_barang
 *        - id_kategori_barang
 *        - stok_barang
 *        - id_satuan_barang
 *        - lokasi_barang
 *        - id_pemasok
 *        - keterangan_barang
 *        - foto_barang
 *      properties:
 *        kode_barang:
 *          type: string
 *          description: kode barang
 *        nama_barang:
 *          type: string
 *          description: nama barang
 *        id_kategori_barang:
 *          type: string
 *          description: id kategori barang
 *        stok_barang:
 *          type: integer
 *          description: stok barang
 *        id_satuan_barang:
 *          type: string
 *          description: id satuan barang
 *        lokasi_barang:
 *          type: string
 *          description: lokasi barang
 *        id_pemasok:
 *          type: string
 *          description: id pemasok
 *        keterangan_barang:
 *          type: string
 *          description: keterangan barang
 *        foto_barang:
 *          type: file
 *          description: foto barang
 *    Create Barang Success:
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
 *            id_barang:
 *              type: string
 *              description: id barang
 *            kode_barang:
 *              type: string
 *              description: kode barang
 *            nama_barang:
 *              type: string
 *              description: nama barang
 *            kategori:
 *              type: object
 *              properties:
 *                id_kategori_barang:
 *                  type: string
 *                  description: id kategori barang
 *                nama_kategori_barang:
 *                  type: string
 *                  description: nama kategori barang
 *            stok_barang:
 *              type: integer
 *              description: stok barang
 *            satuan:
 *              type: object
 *              properties:
 *                id_satuan_barang:
 *                  type: string
 *                  description: id satuan barang
 *                nama_satuan_barang:
 *                  type: string
 *                  description: nama satuan barang
 *            lokasi_barang:
 *              type: string
 *              description: lokasi barang
 *            pemasok:
 *              type: object
 *              properties:
 *                id_pemasok:
 *                  type: string
 *                  description: id pemasok
 *                nama_pemasok:
 *                  type: string
 *                  description: nama pemasok
 *            keterangan_barang:
 *              type: string
 *              description: keterangan barang
 *            foto_barang:
 *              type: string
 *              description: foto barang
 *            createdAt:
 *              type: string
 *              description: create date barang
 *            updatedAt:
 *              type: string
 *              description: update date barang
 */

// GET BY ID
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Barang By Id Success:
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
 *            id_barang:
 *              type: string
 *              description: id barang
 *            kode_barang:
 *              type: string
 *              description: kode barang
 *            nama_barang:
 *              type: string
 *              description: nama barang
 *            kategori:
 *              type: object
 *              properties:
 *                id_kategori_barang:
 *                  type: string
 *                  description: id kategori barang
 *                nama_kategori_barang:
 *                  type: string
 *                  description: nama kategori barang
 *            stok_barang:
 *              type: integer
 *              description: stok barang
 *            satuan:
 *              type: object
 *              properties:
 *                id_satuan_barang:
 *                  type: string
 *                  description: id satuan barang
 *                nama_satuan_barang:
 *                  type: string
 *                  description: nama satuan barang
 *            lokasi_barang:
 *              type: string
 *              description: lokasi barang
 *            pemasok:
 *              type: object
 *              properties:
 *                id_pemasok:
 *                  type: string
 *                  description: id pemasok
 *                nama_pemasok:
 *                  type: string
 *                  description: nama pemasok
 *            keterangan_barang:
 *              type: string
 *              description: keterangan barang
 *            foto_barang:
 *              type: string
 *              description: foto barang
 *            createdAt:
 *              type: string
 *              description: create date barang
 *            updatedAt:
 *              type: string
 *              description: update date barang
 */

// PUT
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Barang:
 *      type: object
 *      required:
 *        - kode_barang
 *        - nama_barang
 *        - id_kategori_barang
 *        - stok_barang
 *        - id_satuan_barang
 *        - lokasi_barang
 *        - id_pemasok
 *        - keterangan_barang
 *        - foto_barang
 *      properties:
 *        kode_barang:
 *          type: string
 *          description: kode barang
 *        nama_barang:
 *          type: string
 *          description: nama barang
 *        id_kategori_barang:
 *          type: string
 *          description: id kategori barang
 *        stok_barang:
 *          type: integer
 *          description: stok barang
 *        id_satuan_barang:
 *          type: string
 *          description: id satuan barang
 *        lokasi_barang:
 *          type: string
 *          description: lokasi barang
 *        id_pemasok:
 *          type: string
 *          description: id pemasok
 *        keterangan_barang:
 *          type: string
 *          description: keterangan barang
 *        foto_barang:
 *          type: file
 *          description: foto barang
 *    Update Barang Success:
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
 *            id_barang:
 *              type: string
 *              description: id barang
 *            kode_barang:
 *              type: string
 *              description: kode barang
 *            nama_barang:
 *              type: string
 *              description: nama barang
 *            kategori:
 *              type: object
 *              properties:
 *                id_kategori_barang:
 *                  type: string
 *                  description: id kategori barang
 *                nama_kategori_barang:
 *                  type: string
 *                  description: nama kategori barang
 *            stok_barang:
 *              type: integer
 *              description: stok barang
 *            satuan:
 *              type: object
 *              properties:
 *                id_satuan_barang:
 *                  type: string
 *                  description: id satuan barang
 *                nama_satuan_barang:
 *                  type: string
 *                  description: nama satuan barang
 *            lokasi_barang:
 *              type: string
 *              description: lokasi barang
 *            pemasok:
 *              type: object
 *              properties:
 *                id_pemasok:
 *                  type: string
 *                  description: id pemasok
 *                nama_pemasok:
 *                  type: string
 *                  description: nama pemasok
 *            keterangan_barang:
 *              type: string
 *              description: keterangan barang
 *            foto_barang:
 *              type: string
 *              description: foto barang
 *            createdAt:
 *              type: string
 *              description: create date barang
 *            updatedAt:
 *              type: string
 *              description: update date barang
 */

// DELETE
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Success
 *        message:
 *          type: string
 *          example: Message Success
 */
