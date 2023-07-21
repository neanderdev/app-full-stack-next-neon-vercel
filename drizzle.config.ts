import { config } from 'dotenv'
import type { Config } from 'drizzle-kit'
import { z } from 'zod'

config({
  path: '.env.local',
})

const databaseUrl = z.string().url().parse(process.env.DRIZZLE_DATABASE_URL)

export default {
  schema: './schema/*',
  out: './drizzle',
  driver: 'pg',
  dbCredentials: {
    connectionString: databaseUrl,
  },
} satisfies Config
