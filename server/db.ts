import { Pool, neonConfig } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';
import ws from "ws";
import * as schema from "@shared/schema";

neonConfig.webSocketConstructor = ws;

// Use DATABASE_URL for DigitalOcean App Platform managed database
const databaseUrl = process.env.DATABASE_URL || process.env.DATABASE_URL_ATS;

if (!databaseUrl) {
  throw new Error(
    "DATABASE_URL must be set. Configure it in DigitalOcean App Platform environment variables.",
  );
}

export const pool = new Pool({ connectionString: databaseUrl });
export const db = drizzle({ client: pool, schema });