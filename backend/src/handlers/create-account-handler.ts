import { Request, Response } from 'express';
import { createAccount } from '../db/db'

const loginHandler = async (req: Request, res: Response) => { 
  const { username, password, emailAddress, firstName, lastName} = req.body;
  try {
    // Confirm that confirmPassword and password are the same
    if (!await createAccount(username, password, emailAddress, firstName, lastName)) {
      res.status(401).json({ error: 'User already exists!' });
    } else {
      res.status(200).json({ message: 'Account creation successful' });
    }
    }
  catch (error) {
    console.error('Error during account creation: ', error);
    res.status(500).json({ error: 'Login failed' });
  }
}

export { loginHandler }