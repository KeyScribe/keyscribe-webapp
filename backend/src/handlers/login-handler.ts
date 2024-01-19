import { Request, Response } from 'express';
import { validateLogin, registerUser } from '../db/db'
const bcrypt = require('bcrypt')

const loginHandler = async (req: Request, res: Response) => { 
  const {username, password} = req.body;
  try {
    if (!await validateLogin(username, password)) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
    }
  catch (error) {
    console.error('Error during login', error);
    res.status(500).json({ error: 'Login failed' });
  }
}

const registerHandler = async (req: Request, res: Response) => { 
  const {firstName, lastName, username, password, email} = req.body;
  try {
    if (await registerUser(firstName, lastName, username, password, email)) {
      res.status(200).json({ message: 'User created' });
    }
  }
  catch (error) {
    console.error('Error during login', error);
    res.status(500).json({ error: 'Login failed' });
  }
}


export { loginHandler, registerHandler }