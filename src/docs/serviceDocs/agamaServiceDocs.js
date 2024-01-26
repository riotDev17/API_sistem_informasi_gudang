// ====== GET AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Agama Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: array
 *          items:
 *            type: object
 *            properties:
 *              id_agama:
 *                type: string
 *                description: id agama
 *              nama_agama:
 *                type: string
 *                description: nama agama
 *              createdAt:
 *                type: string
 *                description: created at
 *              updatedAt:
 *                type: string
 *                description: updated at
 * */

// ====== ADD AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Add Agama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    Add Agama Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 * */

// ====== GET AGAMA BY ID ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Agama By ID Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 *
 * */

// ====== UPDATE AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Agama:
 *      type: object
 *      required:
 *        - nama_agama
 *      properties:
 *        nama_agama:
 *          type: string
 *          description: nama agama
 *    Update Agama Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 *        data:
 *          type: object
 *          properties:
 *            id_agama:
 *              type: string
 *              description: id agama
 *            nama_agama:
 *              type: string
 *              description: nama agama
 *            createdAt:
 *              type: string
 *              description: created at
 *            updatedAt:
 *              type: string
 *              description: updated at
 * */

// ====== DELETE AGAMA ======
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Agama Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          default: Success
 *          description: Success
 *        message:
 *          type: string
 *          default: Message Success
 *          description: message
 * */
