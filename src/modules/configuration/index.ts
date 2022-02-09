import { registerAs } from '@nestjs/config';
import * as dotenv from 'dotenv';

dotenv.config();

export const configValues = {
  database: {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT, 10),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  app: {
    port: parseInt(process.env.PORT, 10),
  },
  jwt: {
    jwtSecret: process.env.JWT_SECRET_KEY,
  },
};

export default registerAs('config', () => {
  return configValues;
});
