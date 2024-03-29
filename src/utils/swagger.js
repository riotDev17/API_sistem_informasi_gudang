import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Sistem Informasi Gudang ',
      description:
        'Dokumentasi ini menjelaskan tentang API sistem informasi gudang yang dibuat menggunakan Express JS dan Prisma. API ini menyediakan fungsionalitas untuk mengelola data gudang, termasuk barang, stok, dan lain sebagainya.',
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
