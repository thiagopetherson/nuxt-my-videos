import { createPool } from 'mysql2/promise';

interface Options {
  query: string;
  values?: any[];
}

const pool = createPool({
  host: 'localhost',  
  user: 'root',
  password: '505987',
  database: 'pablo_codes_nuxt'
});

export const sql = async ({ query, values }: Options) => {
  const [rows] = await pool.query(query, values);
  return rows;
};