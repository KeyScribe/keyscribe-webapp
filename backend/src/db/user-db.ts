import { queryPool } from './db-setup';

const getInfo = async (id: string): Promise<any> => {
  const query = 'SELECT firstname, lastname, username, emailaddress FROM users WHERE user_id = $1';

  const result = await queryPool(query, [id]);

  if (result.rows.length === 0) {
    return '';
  }
  
  return {
    first: result.rows[0].firstname, 
    last: result.rows[0].lastname,
    user: result.rows[0].username,
    email: result.rows[0].emailaddress,
  }
};

const getKeyboards = async (id: string): Promise<any[]> => {
  const query = 'SELECT id, selected, name FROM keyboards WHERE owner = $1';

  const result = await queryPool(query, [id]);

  return result.rows;
}

export {
  getInfo,
  getKeyboards,
};
