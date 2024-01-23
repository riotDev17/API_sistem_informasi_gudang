import { logger } from './logger.js';
import { PrismaClient } from '@prisma/client';

// export const prismaClient = new PrismaClient({
//   log: [
//     {
//       emit: 'event',
//       level: 'query',
//     },
//     {
//       emit: 'event',
//       level: 'error',
//     },
//     {
//       emit: 'event',
//       level: 'info',
//     },
//     {
//       emit: 'event',
//       level: 'warn',
//     },
//   ],
// });

// prismaClient.$on('query', (e) => {
//   logger.warn(e);
// });

// prismaClient.$on('error', (e) => {
//   logger.error(e);
// });

// prismaClient.$on('info', (e) => {
//   logger.info(e);
// });

// prismaClient.$on('warn', (e) => {
//   logger.warn(e);
// });

export const prismaClient = new PrismaClient();
