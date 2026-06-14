import { drizzle } from "drizzle-orm/d1";
import type { D1Database } from "@cloudflare/workers-types/2023-07-01";
import * as schema from "./schema";

export function createDb(env: { DB: D1Database }) {
  return drizzle(env.DB, { schema });
}

export type Db = ReturnType<typeof createDb>;
export { schema };
