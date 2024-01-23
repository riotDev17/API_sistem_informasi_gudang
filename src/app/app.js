import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import * as path from 'path';
import swaggerDocs from '../utils/swagger.js';
// import { auth } from '../routes/auth.js';
// import { router } from '../routes/router.js';
import { errorMiddleware } from '../middleware/errorMiddleware.js';

export const app = express();
swaggerDocs(app, 3000);

app.use(morgan('dev'));
app.use(
  cors({
    origin: '*',
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/images', express.static(path.join('images')));
// app.use(auth);
// app.use(router);
app.use(errorMiddleware);
