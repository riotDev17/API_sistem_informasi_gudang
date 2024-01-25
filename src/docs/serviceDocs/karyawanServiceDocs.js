// GET
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Karyawan Success:
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
 *              id_karyawan:
 *                type: string
 *                description: id_karyawan
 *              no_karyawan:
 *                type: integer
 *                description: no_karyawan
 *              nama_karyawan:
 *                type: string
 *                description: nama_karyawan
 *              jenis_kelamin:
 *                type: string
 *                description: jenis_kelamin
 *              tempat_lahir:
 *                type: string
 *                description: tempat_lahir
 *              tanggal_lahir:
 *                type: string
 *                description: tanggal_lahir
 *              tanggal_masuk:
 *                type: string
 *                description: tanggal_masuk
 *              agama:
 *                type: object
 *                description: agama
 *                properties:
 *                  id_agama:
 *                    type: string
 *                    description: id_agama
 *                  nama_agama:
 *                    type: string
 *                    description: nama_agama
 *              alamat:
 *                type: string
 *                description: alamat_karyawan
 *              no_telp:
 *                type: string
 *                description: no_telp
 *              foto_karyawan:
 *                type: string
 *                description: foto_karyawan
 *              createdAt:
 *                type: string
 *                description: createdAt
 *              updatedAt:
 *                type: string
 *                description: updatedAt
 *
 */

// POST
/**
 * @openapi
 * components:
 *  schemas:
 *    Create Karyawan:
 *      type: object
 *      required:
 *        - nama_karyawan
 *        - jenis_kelamin
 *        - tempat_lahir
 *        - tanggal_lahir
 *        - tanggal_masuk
 *        - id_agama
 *        - alamat
 *        - no_telp
 *        - foto_karyawan
 *      properties:
 *        nama_karyawan:
 *          type: string
 *          description: nama_karyawan
 *        jenis_kelamin:
 *          type: string
 *          description: jenis_kelamin
 *        tempat_lahir:
 *          type: string
 *          description: tempat_lahir
 *        tanggal_lahir:
 *          type: string
 *          description: tanggal_lahir
 *        tanggal_masuk:
 *          type: string
 *          description: tanggal_masuk
 *        id_agama:
 *          type: string
 *          description: id agama
 *        alamat:
 *          type: string
 *          description: alamat_karyawan
 *        no_telp:
 *          type: string
 *          description: no_telp
 *        foto_karyawan:
 *          type: file
 *          description: foto_karyawan
 *    Create Karyawan Success:
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
 *            id_karyawan:
 *              type: string
 *              description: id_karyawan
 *            no_karyawan:
 *              type: integer
 *              description: no_karyawan
 *            nama_karyawan:
 *              type: string
 *              description: nama_karyawan
 *            jenis_kelamin:
 *              type: string
 *              description: jenis_kelamin
 *            tempat_lahir:
 *              type: string
 *              description: tempat_lahir
 *            tanggal_lahir:
 *              type: string
 *              description: tanggal_lahir
 *            tanggal_masuk:
 *              type: string
 *              description: tanggal_masuk
 *            agama:
 *              type: object
 *              description: agama
 *              properties:
 *                id_agama:
 *                  type: string
 *                  description: id_agama
 *                nama_agama:
 *                  type: string
 *                  description: nama_agama
 *            alamat:
 *              type: string
 *              description: alamat_karyawan
 *            no_telp:
 *              type: string
 *              description: no_telp
 *            foto_karyawan:
 *              type: string
 *              description: foto_karyawan
 *            createdAt:
 *              type: string
 *              description: createdAt
 *            updatedAt:
 *              type: string
 *              description: updatedAt
 */

// GET BY ID
/**
 * @openapi
 * components:
 *  schemas:
 *    Get Karyawan By Id Success:
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
 *            id_karyawan:
 *              type: string
 *              description: id_karyawan
 *            no_karyawan:
 *              type: integer
 *              description: no_karyawan
 *            nama_karyawan:
 *              type: string
 *              description: nama_karyawan
 *            jenis_kelamin:
 *              type: string
 *              description: jenis_kelamin
 *            tempat_lahir:
 *              type: string
 *              description: tempat_lahir
 *            tanggal_lahir:
 *              type: string
 *              description: tanggal_lahir
 *            tanggal_masuk:
 *              type: string
 *              description: tanggal_masuk
 *            agama:
 *              type: object
 *              description: agama
 *              properties:
 *                id_agama:
 *                  type: string
 *                  description: id_agama
 *                nama_agama:
 *                  type: string
 *                  description: nama_agama
 *            alamat:
 *              type: string
 *              description: alamat_karyawan
 *            no_telp:
 *              type: string
 *              description: no_telp
 *            foto_karyawan:
 *              type: string
 *              description: foto_karyawan
 *            createdAt:
 *              type: string
 *              description: createdAt
 *            updatedAt:
 *              type: string
 *              description: updatedAt
 */

// PUT
/**
 * @openapi
 * components:
 *  schemas:
 *    Update Karyawan:
 *      type: object
 *      required:
 *        - id_karyawan
 *        - nama_karyawan
 *        - jenis_kelamin
 *        - tempat_lahir
 *        - tanggal_lahir
 *        - tanggal_masuk
 *        - id_agama
 *        - alamat
 *        - no_telp
 *        - foto_karyawan
 *      properties:
 *        id_karyawan:
 *          type: string
 *          description: id_karyawan
 *        nama_karyawan:
 *          type: string
 *          description: nama_karyawan
 *        jenis_kelamin:
 *          type: string
 *          description: jenis_kelamin
 *        tempat_lahir:
 *          type: string
 *          description: tempat_lahir
 *        tanggal_lahir:
 *          type: string
 *          description: tanggal_lahir
 *        tanggal_masuk:
 *          type: string
 *          description: tanggal_masuk
 *        id_agama:
 *          type: string
 *          description: id agama
 *        alamat:
 *          type: string
 *          description: alamat_karyawan
 *        no_telp:
 *          type: string
 *          description: no_telp
 *        foto_karyawan:
 *          type: file
 *          description: foto_karyawan
 *    Update Karyawan Success:
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
 *            id_karyawan:
 *              type: string
 *              description: id_karyawan
 *            no_karyawan:
 *              type: integer
 *              description: no_karyawan
 *            nama_karyawan:
 *              type: string
 *              description: nama_karyawan
 *            jenis_kelamin:
 *              type: string
 *              description: jenis_kelamin
 *            tempat_lahir:
 *              type: string
 *              description: tempat_lahir
 *            tanggal_lahir:
 *              type: string
 *              description: tanggal_lahir
 *            tanggal_masuk:
 *              type: string
 *              description: tanggal_masuk
 *            agama:
 *              type: object
 *              description: agama
 *              properties:
 *                id_agama:
 *                  type: string
 *                  description: id_agama
 *                nama_agama:
 *                  type: string
 *                  description: nama_agama
 *            alamat:
 *              type: string
 *              description: alamat_karyawan
 *            no_telp:
 *              type: string
 *              description: no_telp
 *            foto_karyawan:
 *              type: string
 *              description: foto_karyawan
 *            createdAt:
 *              type: string
 *              description: createdAt
 *            updatedAt:
 *              type: string
 *              description: updatedAt
 * 
 */

// DELETE
/**
 * @openapi
 * components:
 *  schemas:
 *    Delete Karyawan Success:
 *      type: object
 *      properties:
 *        status:
 *          type: string
 *          example: Success
 *        message:
 *          type: string
 *          example: Message Success
 */