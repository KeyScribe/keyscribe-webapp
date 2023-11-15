import { Request, Response } from 'express';
import { pool } from '../db/db'

const loginHandler = async (req: Request, res: Response) => { 
  const {username, password} = req.body;
  try {
    const result = await pool.query("SELECT * FROM users WHERE username = $1 AND password = $2", [username, password]);
    if (result.rows.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' });
      res.redirect('/keyboard/led');
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
    } catch (error) {
      console.error('Error during login', error);
      res.status(500).json({ error: 'Login failed' });
    }
}

export { loginHandler }