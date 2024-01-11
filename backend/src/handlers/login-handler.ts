import { Request, Response } from 'express';
import { validateLogin } from '../db/db';

const loginHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    if (!await validateLogin(username, password)) {
      res.status(401).json({ error: 'Invalid credentials' });
    } else {
      res.status(200).json({ message: 'Login successful' });
    }
  } catch (error) {
    console.error('Error during login', error);
    res.status(500).json({ error: 'Login failed' });
  }
};

export {
  // eslint-disable-next-line import/prefer-default-export
  loginHandler,
};
