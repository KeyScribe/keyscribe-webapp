import { queryPool } from './db-setup';

/**
 * Checks if the hardware id belongs to a valid board
 * @param id The hardware id to check
 * @returns True if the hardware id belongs to a valid board
 */
const validateHardwareId = async (id: number): Promise<boolean> => {
  const query = `
      SELECT 1
      FROM known_hardware_ids
      WHERE id = $1`;

  const result = await queryPool(query, [id]);

  return result.rowCount !== 0;
};

/**
 * Returns the PID associated with the PI if it exists,
 * otherwise returns -1
 * @param hardwareId The hardware id of the PI
 */
const getPID = async (hardwareId: number): Promise<number> => {
  const select = `
      SELECT id
      FROM keyboards
      WHERE hardware_id = $1`;

  const pid = await queryPool(select, [hardwareId]);

  if (pid.rowCount !== 0) {
    return pid.rows[0].id;
  }
  return -1;
};

/**
 * Returns the id of the owner of the keyboard, otherwise null
 * @param pid The pid of the Pi
 */
const getOwner = async (pid: number): Promise<string> => {
  const select = `
      SELECT owner
      FROM keyboards
      WHERE id = $1`;

  const owner = await queryPool(select, [pid]);

  if (owner.rows[0].owner) {
    return owner.rows[0].owner;
  }
  return '';
};

/**
   * Sets the user as the owner of the keyboard
   * @param userId The id of the user claiming the keyboard
   * @param hardwareId The hardware_id of the keyboard
   * @returns True if successful
   */
const setOwner = async (userId: string, hardwareId: number, name: string): Promise<number> => {
  const update = `
      UPDATE keyboards
      SET owner = $1, name = $3
      WHERE owner IS NULL AND hardware_id = $2
      RETURNING id`;

  const result = await queryPool(update, [userId, hardwareId, name]);

  if (result.rowCount === 0) {
    return -1;
  }

  return result.rows[0].id;
};

/**
   * Creates a new keyboard and assigns it a PID
   * @param hardwareId The hardware id of the Pi
   */
const createKeyboard = async (hardwareId: number) => {
  const insert = `
      INSERT INTO keyboards(id, hardware_id)
      VALUES ($1, $2)`;

  const newId = Math.floor(Math.random() * 99999999);

  await queryPool(insert, [newId, hardwareId]);

  return newId;
};

export {
  validateHardwareId,
  getPID,
  getOwner,
  setOwner,
  createKeyboard,
};
