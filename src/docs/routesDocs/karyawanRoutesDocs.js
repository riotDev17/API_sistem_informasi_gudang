// GET
/**
 * @openapi
 * /api/karyawan:
 *  get:
 *    tags:
 *      - Karyawan
 *    summary: Get Karyawan
 *    description: Get Karyawan
 *    responses:
 *      200:
 *        description: Get Karyawan Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Karyawan Success'
 */

// POST
/**
 * @openapi
 * /api/karyawan:
 *  post:
 *    tags:
 *      - Karyawan
 *    summary: Create Karyawan
 *    description: Create Karyawan
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Create Karyawan'
 *    responses:
 *      200:
 *        description: Create Karyawan Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Create Karyawan Success'
 */

// GET BY ID
/**
 * @openapi
 * /api/karyawan/{karyawanId}:
 *  get:
 *    tags:
 *      - Karyawan
 *    summary: Get Karyawan By Id
 *    description: Get Karyawan By Id
 *    parameters:
 *      - name: karyawanId
 *        in: path
 *        required: true
 *        description: id karyawan
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Karyawan By Id Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Karyawan By Id Success'
 */

// PUT
/**
 * @openapi
 * /api/karyawan/{karyawanId}:
 *  put:
 *    tags:
 *      - Karyawan
 *    summary: Update Karyawan
 *    description: Update Karyawan
 *    parameters:
 *      - name: karyawanId
 *        in: path
 *        required: true
 *        description: id karyawan
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Update Karyawan'
 *    responses:
 *      200:
 *        description: Update Karyawan Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Karyawan Success'
 */

// DELETE
/**
 * @openapi
 * /api/karyawan/{karyawanId}:
 *  delete:
 *    tags:
 *      - Karyawan
 *    summary: Delete Karyawan
 *    description: Delete Karyawan
 *    parameters:
 *      - name: karyawanId
 *        in: path
 *        required: true
 *        description: id karyawan
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Karyawan Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Karyawan Success'
 */