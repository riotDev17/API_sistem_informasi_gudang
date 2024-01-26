// GET
/**
 * @openapi
 * /api/barang:
 *  get:
 *    tags:
 *      - Barang
 *    summary: Get Barang
 *    description: Get Barang
 *    responses:
 *      200:
 *        description: Get Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Barang Success'
 *
 * 
 * 
 */

// POST
/**
 * @openapi
 * /api/barang:
 *  post:
 *    tags:
 *      - Barang
 *    summary: Create Barang
 *    description: Create Barang
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Create Barang'
 *    responses:
 *      201:
 *        description: Create Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Create Barang Success'
 *
 * 
 * 
 */

// GET BY ID
/**
 * @openapi
 * /api/barang/{barangId}:
 *  get:
 *    tags:
 *      - Barang
 *    summary: Get Barang By Id
 *    description: Get Barang By Id
 *    parameters:
 *      - name: barangId
 *        in: path
 *        required: true
 *        description: id barang
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Barang By Id Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Barang By Id Success'
 *
 * 
 * 
 */

// PUT
/**
 * @openapi
 * /api/barang/{barangId}:
 *  put:
 *    tags:
 *      - Barang
 *    summary: Update Barang
 *    description: Update Barang
 *    parameters:
 *      - name: barangId
 *        in: path
 *        required: true
 *        description: id barang
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Update Barang'
 *    responses:
 *      200:
 *        description: Update Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Barang Success'
 *
 * 
 * 
 */

// DELETE
/**
 * @openapi
 * /api/barang/{barangId}:
 *  delete:
 *    tags:
 *      - Barang
 *    summary: Delete Barang
 *    description: Delete Barang
 *    parameters:
 *      - name: barangId
 *        in: path
 *        required: true
 *        description: id barang
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Barang Success'
 *
 * 
 * 
 */