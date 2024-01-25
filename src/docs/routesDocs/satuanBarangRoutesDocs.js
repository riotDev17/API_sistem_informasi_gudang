// GET
/**
 * @openapi
 * /api/satuan-barang:
 *  get:
 *    tags:
 *      - Satuan Barang
 *    summary: Get Satuan Barang
 *    description: Get Satuan Barang
 *    responses:
 *      200:
 *        description: Get Satuan Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Satuan Barang Success'
 * 
 * 
 */

// POST
/**
 * @openapi
 * /api/satuan-barang:
 *  post:
 *    tags:
 *      - Satuan Barang
 *    summary: Create Satuan Barang
 *    description: Create Satuan Barang
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Create Satuan Barang'
 *    responses:
 *      201:
 *        description: Create Satuan Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Create Satuan Barang Success'
 * 
 * 
 */

// GET BY ID
/**
 * @openapi
 * /api/satuan-barang/{satuanBarangId}:
 *  get:
 *    tags:
 *      - Satuan Barang
 *    summary: Get Satuan Barang By Id
 *    description: Get Satuan Barang By Id
 *    parameters:
 *      - in: path
 *        name: satuanBarangId
 *        required: true
 *        description: id satuan barang
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Satuan Barang By Id Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Satuan Barang By Id Success'
 * 
 * 
 */

// PUT
/**
 * @openapi
 * /api/satuan-barang/{satuanBarangId}:
 *  put:
 *    tags:
 *      - Satuan Barang
 *    summary: Update Satuan Barang
 *    description: Update Satuan Barang
 *    parameters:
 *      - in: path
 *        name: satuanBarangId
 *        required: true
 *        description: id satuan barang
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Update Satuan Barang'
 *    responses:
 *      200:
 *        description: Update Satuan Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Satuan Barang Success'
 * 
 * 
 */

// DELETE
/**
 * @openapi
 * /api/satuan-barang/{satuanBarangId}:
 *  delete:
 *    tags:
 *      - Satuan Barang
 *    summary: Delete Satuan Barang
 *    description: Delete Satuan Barang
 *    parameters:
 *      - in: path
 *        name: satuanBarangId
 *        required: true
 *        description: id satuan barang
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Satuan Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Satuan Barang Success'
 * 
 * 
 */