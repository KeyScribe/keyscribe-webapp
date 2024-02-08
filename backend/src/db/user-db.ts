import { queryPool } from './db-setup';

const getInfo = async (id: string): Promise<any> => {
  const query = 'SELECT firstname, username, emailaddress FROM users WHERE user_id = $1';

  const result = await queryPool(query, [id]);

  if (result.rowCount === 0) {
    return '';
  }
  console.log("firstname: ", result.rows[0].firstname)
  console.log("username: ", result.rows[0].username)
  console.log("email: ", result.rows[0].emailaddress)
  console.log("firstname: ", result.rows[0].firstname)
  return {
    first: result.rows[0].firstname, 
    user: result.rows[0].username,
    email: result.rows[0].emailaddress,
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getInfo,
};
