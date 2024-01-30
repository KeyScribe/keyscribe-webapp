import { Request, Response } from 'express';
import { createAccount } from '../db/login-db';

const loginHandler = (req: Request, res: Response) => res.status(200).send();

const registerHandler = async (req: Request, res: Response) => {
  const {
    username, password, emailAddress, firstName, lastName,
  } = req.body;
  try {
    if (!await createAccount(username, password, emailAddress, firstName, lastName)) {
      res.status(401).json({ error: 'User already exists!' });
    } else {
      res.status(200).json({ message: 'Account creation successful' });
    }
  } catch (error) {
    console.error('Error during account creation: ', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

export {
  loginHandler,
  registerHandler,
};
