// ======= GET AGAMA =======
/**
 * @openapi
 * /api/agama:
 *  get:
 *    tags:
 *      - Agama
 *    summary: Get Agama
 *    description: Get Agama
 *    responses:
 *      200:
 *        description: Get Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Agama Success'
 * */

// ====== ADD AGAMA ======
/**
 * @openapi
 * /api/agama:
 *  post:
 *    tags:
 *      - Agama
 *    summary: Add Agama
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Add Agama'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add Agama Success'
 * */

// ====== GET AGAMA BY ID ======
/**
 * @openapi
 * /api/agama/{agamaId}:
 *  get:
 *    tags:
 *      - Agama
 *    summary: Get Agama By ID
 *    description: Get Agama By ID
 *    parameters:
 *      - name: agamaId
 *        in: path
 *        required: true
 *        description: id agama
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Get Agama By ID Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Agama By ID Success'
 *
 *
 * */

// ====== UPDATE AGAMA ======
/**
 * @openapi
 * /api/agama/{agamaId}:
 *  put:
 *    tags:
 *      - Agama
 *    summary: Update Agama
 *    description: Update Agama
 *    parameters:
 *      - name: agamaId
 *        in: path
 *        required: true
 *        description: id agama
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Update Agama'
 *    responses:
 *      200:
 *        description: Update Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Agama Success'
 *
 * */

// ====== DELETE AGAMA ======
/**
 * @openapi
 * /api/agama/{agamaId}:
 *  delete:
 *    tags:
 *      - Agama
 *    summary: Delete Agama
 *    description: Delete Agama
 *    parameters:
 *      - name: agamaId
 *        in: path
 *        required: true
 *        description: id agama
 *        schema:
 *          type: string
 *    responses:
 *      200:
 *        description: Delete Agama Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Delete Agama Success'
 *
 * */
