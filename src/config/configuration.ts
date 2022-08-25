import * as dotenv from 'dotenv';
import { AddressEntity } from '../address/entites/address.entity';
dotenv.config();
export default () => ({
  app: {
    port: parseInt(process.env.PORT) || 3000,
    country: process.env.COUNTRY || 'RU',
  },
  postgres: {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB_NAME,
    entities: [AddressEntity],
    synchronize: true,
  },
});
