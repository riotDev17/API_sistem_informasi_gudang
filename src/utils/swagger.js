import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Sistem Informasi Gudang | GudangNet',
      description:
        'GudangNet adalah sebuah sistem informasi gudang berbasis website yang dibangun menggunakan React JS dan Express JS. Sistem ini dirancang untuk mempermudah pengelolaan gudang, mulai dari penerimaan barang, penyimpanan barang, hingga pengeluaran barang. \n\n\nGudangNet memiliki bebarapa fitur antara lain : \n\n- Login Admin \n\n- Manajemen master data seperti Agama , Kategori Barang , Satuan Barang \n\n- Manajemen Karyawan \n\n- Manajemen Pemasok \n\n- Manajemen Barang \n\n- Manajemen Pengambilan Barang \n\n- Manajemen Barang Masuk \n\n- Laporan Pengambilan Barang \n\n- Laporan Barang Masuk \n\n Tech Stack yang saya gunakan dalam membuat REST API ini antara lain : \n\n- Express JS \n\n- JavaScript \n\n- Node JS \n\n- PostgreSQL \n\n- Prisma ORM ',
      version: '1.0.0',
      contact: {
        name: 'Thomas Alberto',
        url: 'https://thomasalberto.vercel.app/',
        email: 'tomasalberto527@gmail.com',
      },
    },
    components: {
      securitySchemes: {
        barrerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    security: [
      {
        barrerAuth: [],
      },
    ],
  },
  apis: ['./src/docs/serviceDocs/*.js', './src/docs/routesDocs/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

  //  Docs in JSON format
  app.get('/api-docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
  console.log(`Swagger docs available at http://localhost:${port}/api-docs`);
};

export default swaggerDocs;
