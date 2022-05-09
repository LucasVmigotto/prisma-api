export default {
  HOST: process.env.API_HOST ?? '0.0.0.0',
  PORT: process.env.API_PORT ?? 3000,
  POSTGRES_USER: process.env.POSTGRES_USER ?? 'admin',
  POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD ?? 'rootroot',
  POSTGRES_HOST: process.env.POSTGRES_HOST ?? 'localhost',
  POSTGRES_DB: process.env.POSTGRES_DB ?? 'prisma_api_db'
}
