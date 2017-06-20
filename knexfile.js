module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/kims-web-store'
  }
  production {
    client: 'pg',
    connection: process.env.DATABASE_URL 
  }
};
