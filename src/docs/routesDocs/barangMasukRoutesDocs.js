// GET
/**
 * @openapi
 * /api/barang-masuk:
 *   get:
 *     tags:
 *       - Barang Masuk
 *     summary: Get Barang Masuk
 *     description: Get Barang Masuk
 *     responses:
 *       200:
 *         description: Get All Barang Masuk Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get All Barang Masuk Success'
 *
 *
 */

// POST
/**
 * @openapi
 * /api/barang-masuk:
 *   post:
 *     tags:
 *       - Barang Masuk
 *     summary: Create Barang Masuk
 *     description: Create Barang Masuk
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Barang Masuk'
 *     responses:
 *       201:
 *         description: Create Barang Masuk Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Barang Masuk Success'
 */

// GET BY ID
/**
 * @openapi
 * /api/barang-masuk/{barangMasukId}:
 *   get:
 *     tags:
 *       - Barang Masuk
 *     summary: Get Barang Masuk By Id
 *     description: Get Barang Masuk By Id
 *     parameters:
 *       - name: barangMasukId
 *         in: path
 *         required: true
 *         description: id barang masuk
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get Barang Masuk By Id Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Barang Masuk By Id Success'
 */

// PUT
/**
 * @openapi
 * /api/barang-masuk/{barangMasukId}:
 *   put:
 *     tags:
 *       - Barang Masuk
 *     summary: Update Barang Masuk
 *     description: Update Barang Masuk
 *     parameters:
 *       - name: barangMasukId
 *         in: path
 *         required: true
 *         description: id barang masuk
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Barang Masuk'
 *     responses:
 *       200:
 *         description: Update Barang Masuk Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Barang Masuk Success'
 */

// DELETE
/**
 * @openapi
 * /api/barang-masuk/{barangMasukId}:
 *   delete:
 *     tags:
 *       - Barang Masuk
 *     summary: Delete Barang Masuk
 *     description: Delete Barang Masuk
 *     parameters:
 *       - name: barangMasukId
 *         in: path
 *         required: true
 *         description: id barang masuk
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete Barang Masuk Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Barang Masuk Success'
 */
