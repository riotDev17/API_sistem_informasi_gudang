// GET
/**
 * @openapi
 * /api/pengambilan-Barang:
 *   get:
 *     tags:
 *       - Pengambilan Barang
 *     summary: Get Pengambilan Barang
 *     description: Get Pengambilan Barang
 *     responses:
 *       200:
 *         description: Get Pengambilan Barang Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get All Pengambilan Barang Success'
 */

// POST
/**
 * @openapi
 * /api/pengambilan-Barang:
 *   post:
 *     tags:
 *       - Pengambilan Barang
 *     summary: Create Pengambilan Barang
 *     description: Create Pengambilan Barang
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Create Pengambilan Barang'
 *     responses:
 *       201:
 *         description: Create Pengambilan Barang Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Create Pengambilan Barang Success'
 */

// DELETE ALL
/**
 * @openapi
 * /api/pengambilan-Barang:
 *   delete:
 *     tags:
 *       - Pengambilan Barang
 *     summary: Delete All Pengambilan Barang
 *     description: Delete All Pengambilan Barang
 *     responses:
 *       200:
 *         description: Delete All Pengambilan Barang Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete All Pengambilan Barang Success'
 */

// GET BY ID
/**
 * @openapi
 * /api/pengambilan-Barang/{pengambilanBarangId}:
 *   get:
 *     tags:
 *       - Pengambilan Barang
 *     summary: Get Pengambilan Barang By ID
 *     description: Get Pengambilan Barang By ID
 *     parameters:
 *       - name: pengambilanBarangId
 *         in: path
 *         description: id pengambilan barang
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Get Pengambilan Barang By ID Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Get Pengambilan Barang By ID Success'
 */

// PUT
/**
 * @openapi
 * /api/pengambilan-Barang/{pengambilanBarangId}:
 *   put:
 *     tags:
 *       - Pengambilan Barang
 *     summary: Update Pengambilan Barang
 *     description: Update Pengambilan Barang
 *     parameters:
 *       - name: pengambilanBarangId
 *         in: path
 *         description: id pengambilan barang
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Update Pengambilan Barang'
 *     responses:
 *       200:
 *         description: Update Pengambilan Barang Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Update Pengambilan Barang Success'
 */

// DELETE
/**
 * @openapi
 * /api/pengambilan-Barang/{pengambilanBarangId}:
 *   delete:
 *     tags:
 *       - Pengambilan Barang
 *     summary: Delete Pengambilan Barang
 *     description: Delete Pengambilan Barang
 *     parameters:
 *       - name: pengambilanBarangId
 *         in: path
 *         description: id pengambilan barang
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Delete Pengambilan Barang Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Delete Pengambilan Barang Success'
 */