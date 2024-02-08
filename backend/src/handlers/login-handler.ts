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
    res.status(500).json({ error: 'Login failed' });
  }
};

const logoutHandler = async (req: Request, res: Response) => {
  console.log('received'); // fixme adam
  req.logout((err) => {
    if (err) {
      res.status(500).send();
    }
    req.session.destroy((err) => {
      if (err) {
        res.status(500).send();
      }
      res.status(200).send();
    });
  });
};

export {
  loginHandler,
  registerHandler,
  logoutHandler,
};
