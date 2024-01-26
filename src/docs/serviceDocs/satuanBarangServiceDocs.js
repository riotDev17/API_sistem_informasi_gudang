// GET
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Satuan Barang Success:
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
 *              id_satuan_barang:
 *                type: string
 *                description: id satuan barang
 *              nama_satuan_barang:
 *                type: string
 *                description: nama satuan barang
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 *
 *
 */

// POST
/**
 * @openapi
 * components:
 *  schemas:
 *    Create Satuan Barang:
 *      type: object
 *      required:
 *        - nama_satuan_barang
 *      properties:
 *        nama_satuan_barang:
 *          type: string
 *          description: nama satuan barang
 *    Create Satuan Barang Success:
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
 *            id_satuan_barang:
 *              type: string
 *              description: id satuan barang
 *            nama_satuan_barang:
 *              type: string
 *              description: nama satuan barang
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 */

// GET BY ID
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Satuan Barang By Id Success:
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
 *            id_satuan_barang:
 *              type: string
 *              description: id satuan barang
 *            nama_satuan_barang:
 *              type: string
 *              description: nama satuan barang
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *
 *
 */

// PUT
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Satuan Barang:
 *      type: object
 *      required:
 *        - nama_satuan_barang
 *      properties:
 *        nama_satuan_barang:
 *          type: string
 *          description: nama satuan barang
 *    Update Satuan Barang Success:
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
 *            id_satuan_barang:
 *              type: string
 *              description: id satuan barang
 *            nama_satuan_barang:
 *              type: string
 *              description: nama satuan barang
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 */

// DELETE
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Satuan Barang Success:
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
 *
 */
