import { Pool } from 'pg';

const pool = new Pool({
  user: 'keyscribe',
  host: 'ec2-3-86-40-33.compute-1.amazonaws.com',
  database: 'ks_db',
  password: 'Keyscribe',
  port: 5432, // Default PostgreSQL port
  ssl: false
});

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

  const result = await pool.query(query, [id]);
  
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

  const pid = await pool.query(select, [hardwareId]);

  if(pid.rowCount !== 0) {
    return pid.rows[0].id;
  } else {
    return -1;
  }
};

/**
 * Returns the id of the owner of the keyboard, otherwise -1
 * @param pid The pid of the Pi
 */
const getOwner = async (pid: number): Promise<number> => {

  const select = `
    SELECT owner
    FROM keyboards
    WHERE id = $1`;

  const owner = await pool.query(select, [pid]);

  if(owner.rowCount !== 0) {
    return owner.rows[0].id;
  } else {
    return -1;
  }
};

/**
 * Sets the user as the owner of the keyboard
 * @param userId The id of the user claiming the keyboard
 * @param pid The id of the keyboard
 * @returns True if successful
 */
const setOwner = async (userId: number, pid: number): Promise<boolean> => {

  const update = `
    UPDATE keyboards
    SET owner = $1
    WHERE owner IS NULL AND id = $2
    RETURNING pid`;

  const id = await pool.query(update, [userId, pid]);

  return id.rowCount !== 0;
};

/**
 * Creates a new keyboard and assigns it a PID
 * @param hardwareId The hardware id of the Pi
 */
const createKeyboard = async (hardwareId: number) => {

  const insert = `
    INSERT INTO keyboards(id, hardware_id)
    VALUES ($1, $2)`;

  const newId = Math.random() * 99999999;

  await pool.query(insert, [newId, hardwareId]);

  return newId;

}

export {
  validateHardwareId,
  getPID,
  getOwner,
  setOwner,
  createKeyboard,
};