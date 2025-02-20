import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:npg_xYf1sknC3Zho@ep-long-block-a263r3cs-pooler.eu-central-1.aws.neon.tech/neondb?sslmode=require', // Ensure this is set in your .env file
  },
});
