import { queryPool } from './db-setup';

const getName = async (id: string): Promise<string> => {
  const query = 'SELECT firstname FROM users WHERE user_id = $1';

  const result = await queryPool(query, [id]);

  if (result.rowCount === 0) {
    return '';
  }
  return result.rows[0].firstname;
};

export {
  getName,
};
