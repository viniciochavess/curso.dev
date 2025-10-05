const Client = require("pg").Client;
require("dotenv").config();

async function query(queryObject) {
  const client = new Client({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
  });
  await client.connect();
  const result = await client.query(queryObject);
  await client.end();
  return result;
}

module.exports = { query };
