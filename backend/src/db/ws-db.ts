import { queryPool } from './db-setup';

/**
 * Returns all other keyboards a keyboard is connected to
 * @param id The keyboard whose connections you want to find
 * @returns A list of keyboard IDs that this keyboard is connected to
 */
const getConnectedKeyboards = async (id: number) => {
  const select = `
      SELECT teacher_keyboard as id
      FROM connections
      WHERE student_keyboard = $1
      UNION
      SELECT student_keyboard as id
      FROM connections
      WHERE teacher_keyboard = $1`;

  const result = await queryPool(select, [id]);

  const connectedIds: number[] = [];

  result.rows.forEach((row) => {
    connectedIds.push(row.id);
  });

  return connectedIds;
};

const removeAllKeyboardConnections = async (id: number) => {
  const query = `
      DELETE FROM connections
      WHERE teacher_keyboard = $1 OR student_keyboard = $1`;

  await queryPool(query, [id]);
};

export {
  getConnectedKeyboards,
  removeAllKeyboardConnections,
};
