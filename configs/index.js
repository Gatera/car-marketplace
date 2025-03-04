import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";
import * as schema from './schema'

config({ path: ".env" }); // or .env.local

const sql = neon(import.meta.VITE_DRIZZLE_DATABASE_URL);
export const db = drizzle({ client: sql, schema });
