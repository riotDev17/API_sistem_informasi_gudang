// ======== ADMIN REGISTER =========
/**
 * @openapi
 * /api/admin/register:
 *  post:
 *   tags:
 *    - Admin
 *   summary: Register Admin
 *   requestBody:
 *    required: true
 *    content:
 *      application/json:
 *        schema:
 *          $ref: '#/components/schemas/Register Admin'
 *   responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Register Admin Success'
 */

// ======== ADMIN LOGIN =========
/**
 * @openapi
 * /api/admin/login:
 *  post:
 *    tags:
 *      - Admin
 *    summary: Login Admin
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Login Admin'
 *    responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Login Admin Success'
 *
 * */

// ======== ADMIN GET DATA =========
/**
 * @openapi
 * /api/admin:
 *  get:
 *    tags:
 *      - Admin
 *    summary: Get Admin
 *    description: Get Admin
 *    responses:
 *      200:
 *        description: Get Admin Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Get Admin Success'
 * */

// ======== ADMIN UPDATE =========
/**
 * @openapi
 * /api/admin/{adminId}:
 *  put:
 *    tags:
 *      - Admin
 *    summary: Update Admin
 *    description: Update Admin
 *    parameters:
 *      - name: adminId
 *        in: path
 *        required: true
 *        description: id admin
 *        schema:
 *          type: string
 *    requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *          schema:
 *            $ref: '#/components/schemas/Update Admin'
 *    responses:
 *      200:
 *        description: Update Admin Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Update Admin Success'
 *
 * */

// ======== ADMIN LOGOUT =========
/**
 * @openapi
 * /api/admin/logout:
 *  delete:
 *    tags:
 *      - Admin
 *    summary: Logout Admin
 *    description: Logout Admin
 *    responses:
 *      200:
 *        description: Logout Admin Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Logout Admin Success'
 *
 * */
