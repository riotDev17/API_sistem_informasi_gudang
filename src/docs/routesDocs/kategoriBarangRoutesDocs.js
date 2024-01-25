// GET
/**
 * @openapi
 * /api/kategori-barang:
 *  get:
 *    tags:
 *      - Kategori Barang
 *    summary: Get Kategori Barang
 *    description: Get Kategori Barang
 *    responses:
 *      200:
 *        description: Get Kategori Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kategori Barang Success'
 *
 *
 */

// POST
/**
 * @openapi
 * /api/kategori-barang:
 *  post:
 *    tags:
 *      - Kategori Barang
 *    summary: Create Kategori Barang
 *    description: Create Kategori Barang
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Create Kategori Barang'
 *    responses:
 *      201:
 *        description: Create Kategori Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Create Kategori Barang Success'
 *
 *
 */

// GET BY ID
/**
 * @openapi
 * /api/kategori-barang/{kategoriBarangId}:
 *  get:
 *    tags:
 *      - Kategori Barang
 *    summary: Get Kategori Barang By Id
 *    description: Get Kategori Barang By Id
 *    parameters:
 *      - in: path
 *        name: kategoriBarangId
 *        required: true
 *        description: id kategori barang
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Kategori Barang By Id Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Kategori Barang By Id Success'
 *
 *
 */

// PUT
/**
 * @openapi
 * /api/kategori-barang/{kategoriBarangId}:
 *  put:
 *    tags:
 *      - Kategori Barang
 *    summary: Update Kategori Barang
 *    description: Update Kategori Barang
 *    parameters:
 *      - in: path
 *        name: kategoriBarangId
 *        required: true
 *        description: id kategori barang
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Update Kategori Barang'
 *    responses:
 *      200:
 *        description: Update Kategori Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Kategori Barang Success'
 *
 *
 */

// DELETE
/**
 * @openapi
 * /api/kategori-barang/{kategoriBarangId}:
 *  delete:
 *    tags:
 *      - Kategori Barang
 *    summary: Delete Kategori Barang
 *    description: Delete Kategori Barang
 *    parameters:
 *      - in: path
 *        name: kategoriBarangId
 *        required: true
 *        description: id kategori barang
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Kategori Barang Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Kategori Barang Success'
 *
 *
 */