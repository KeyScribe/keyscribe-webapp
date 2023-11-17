const { Pool } = require('pg');

const pool = new Pool({
  user: 'keyscribe',
  host: 'ec2-3-86-40-33.compute-1.amazonaws.com',
  database: 'ks_db',
  password: 'Keyscribe',
  port: 5432, // Default PostgreSQL port
  ssl: false
});

export {pool};