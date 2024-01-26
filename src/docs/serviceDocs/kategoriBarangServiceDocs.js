// GET
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Kategori Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          desctiption: Message Success
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_kategori_barang:
 *                type: string
 *                description: id kategori barang
 *              nama_kategori_barang:
 *                type: string
 *                description: nama kategori barang
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 *
 */

// POST
/**
 * @openapi
 * components:
 *  schemas:
 *    Create Kategori Barang:
 *      type: object
 *      required:
 *        - nama_kategori_barang
 *      properties:
 *        nama_kategori_barang:
 *          type: string
 *          description: nama kategori barang
 *    Create Kategori Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          desctiption: Message Success
 *        data:
 *          type: object
 *          properties:
 *            id_kategori_barang:
 *              type: string
 *              description: id kategori barang
 *            nama_kategori_barang:
 *              type: string
 *              description: nama kategori barang
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *
 */

// GET BY ID
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Kategori Barang By Id Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          desctiption: Message Success
 *        data:
 *          type: object
 *          properties:
 *            id_kategori_barang:
 *              type: string
 *              description: id kategori barang
 *            nama_kategori_barang:
 *              type: string
 *              description: nama kategori barang
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *
 */

// PUT
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Kategori Barang:
 *      type: object
 *      required:
 *        - nama_kategori_barang
 *      properties:
 *        nama_kategori_barang:
 *          type: string
 *          description: nama kategori barang
 *    Update Kategori Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          desctiption: Message Success
 *        data:
 *          type: object
 *          properties:
 *            id_kategori_barang:
 *              type: string
 *              description: id kategori barang
 *            nama_kategori_barang:
 *              type: string
 *              description: nama kategori barang
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *
 */

// DELETE
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Kategori Barang Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          desctiption: Message Success
 *
 */