module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'postgres'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'plasmox'),
        username: env('DATABASE_USERNAME', 'plasmox'),
        password: env('DATABASE_PASSWORD', 'plasmox123'),
        ssl: env.bool('DATABASE_SSL', false)
      },
      options: {}
    }
  }
})
