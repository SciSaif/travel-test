module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '217.21.87.99'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'u867176488_jazeera'),
      user: env('DATABASE_USERNAME', 'u867176488_altamash'),
      password: env('DATABASE_PASSWORD', 'Altamash123'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
