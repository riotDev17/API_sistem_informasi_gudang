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

// DELETE ALL
/**
 * @openapi
 * /api/barang-masuk:
 *   delete:
 *     tags:
 *       - Barang Masuk
 *     summary: Delete All Barang Masuk
 *     description: Delete All Barang Masuk
 *     responses:
 *       200:
 *         description: Delete All Barang Masuk Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete All Barang Masuk Success'
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
