import { Pool } from 'pg';
const bcrypt = require('bcrypt')

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

  if(owner.rows[0].owner) {
    return owner.rows[0].owner;
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

  const newId = Math.floor(Math.random() * 99999999);

  await pool.query(insert, [newId, hardwareId]);

  return newId;

}

/**
 * Ensures that user credentials is correct
 * @param username Username of the user
 * @param password Password of the user
 * @returns True if user exists in database
 */
const validateLogin = async (username: string, password: string): Promise<boolean> => {
  const query = 'SELECT password FROM users WHERE username = $1 LIMIT 1';

  const result = await pool.query(query, [username]);

  if (result.rowCount == 0) {
    console.log(" The username is invalid.");
    return false;
  }
  const [hashedPassword] = result.rows[0];
  const isValid = await bcrypt.compare(password, hashedPassword);
  if (isValid) {
    // Password matches
    return true;
  }
  else {
    console.log(" The password is invalid.");
    return false;
  }

};

const getConnectedKeyboards = async (id: number) => {

  const select = `
    SELECT teacher_keyboard as id
    FROM connections
    WHERE student_keyboard = $1
    UNION
    SELECT student_keyboard as id
    FROM connections
    WHERE teacher_keyboard = $1`;

  const result = await pool.query(select, [id]);

  let connectedIds: number[] = [];

  result.rows.forEach((row) => {
    connectedIds.push(row.id);
  });

  return connectedIds;
} 

/**
 * Adds a user to the database. First checks if user exists
 * @param username
 * @param password
 * @param email Used for password retrieval purposes
 * @param firstName 
 * @param lastName
 * @returns True if user account creation was successful
 */
const createAccount = async (username: string, password: string, email: string, firstName: string, lastName: string) =>  {
  const checkUser = `
    SELECT EXISTS (
      SELECT 1
      FROM Users
      WHERE username = $1
      AND emailAddress = $2
    )
  `;
  const userExists = await pool.query(checkUser, [username, email]);
  if (userExists.rowCount == 1) {
    return false; // User already exists in database
  }
  else {
    // Create an account for the user
    // Hash the password
    const salt = await bcrypt.genSalt(20);
    const hashedPassword = await bcrypt.hash(password, salt);
    // FIXME: Change insert query so that it returns an error if something went wrong.
    const insert = `
      INSERT INTO Users VALUES 
      ($1, $2, $3, $4, $5)
    `;

    const result = await pool.query(insert, [username, hashedPassword, firstName, lastName, email])
    return true;
  }
};


export {
  validateHardwareId,
  getPID,
  getOwner,
  setOwner,
  createKeyboard,
  validateLogin,
  getConnectedKeyboards,
  createAccount,
};