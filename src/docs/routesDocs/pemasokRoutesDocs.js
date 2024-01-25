// GET
/**
 * @openapi
 * /api/pemasok:
 *  get:
 *    tags:
 *      - Pemasok
 *    summary: Get Pemasok
 *    description: Get Pemasok
 *    responses:
 *      200:
 *        description: Get Pemasok Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Pemasok Success'
 * 
 * 
 */

// POST
/**
 * @openapi
 * /api/pemasok:
 *  post:
 *    tags:
 *      - Pemasok
 *    summary: Create Pemasok
 *    description: Create Pemasok
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Create Pemasok'
 *    responses:
 *      201:
 *        description: Create Pemasok Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Create Pemasok Success'
 * 
 * 
 */

// GET BY ID
/**
 * @openapi
 * /api/pemasok/{pemasokId}:
 *  get:
 *    tags:
 *      - Pemasok
 *    summary: Get Pemasok By Id
 *    description: Get Pemasok By Id
 *    parameters:
 *      - in: path
 *        name: pemasokId
 *        required: true
 *        description: id pemasok
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Pemasok By Id Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Pemasok By Id Success'
 * 
 * 
 */

// PUT
/**
 * @openapi
 * /api/pemasok/{pemasokId}:
 *  put:
 *    tags:
 *      - Pemasok
 *    summary: Update Pemasok
 *    description: Update Pemasok
 *    parameters:
 *      - in: path
 *        name: pemasokId
 *        required: true
 *        description: id pemasok
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Update Pemasok'
 *    responses:
 *      200:
 *        description: Update Pemasok Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Pemasok Success'
 * 
 * 
 */

// DELETE
/**
 * @openapi
 * /api/pemasok/{pemasokId}:
 *  delete:
 *    tags:
 *      - Pemasok
 *    summary: Delete Pemasok
 *    description: Delete Pemasok
 *    parameters:
 *      - in: path
 *        name: pemasokId
 *        required: true
 *        description: id pemasok
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Pemasok Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Pemasok Success'
 * 
 * 
 */