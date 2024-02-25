import { queryPool } from './db-setup';

const getName = async (id: string): Promise<string> => {
  const query = 'SELECT firstname FROM users WHERE user_id = $1';

  const result = await queryPool(query, [id]);

  if (result.rows.length === 0) {
    return '';
  }
  return result.rows[0].firstname;
};

const getKeyboards = async (id: string): Promise<any[]> => {
  const query = 'SELECT id, name FROM keyboards WHERE owner = $1';

  const result = await queryPool(query, [id]);

  return result.rows;
}

export {
  getName,
  getKeyboards,
};
