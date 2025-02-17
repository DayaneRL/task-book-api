import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
// import { config } from "dotenv";
import * as schema from './schema'
import { env } from '../env';

// config({ path: ".env" }); // or .env.local
const sql = neon(env.DATABASE_URL);
export const client = sql
export const db = drizzle(client, { schema, logger: true });