import { Request, Response } from 'express';
import { validateLogin, createAccount } from '../db/login-db';

const loginHandler = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  try {
    if (!await validateLogin(username, password)) {
      return res.status(401).json({ error: 'Invalid credentials' });
    } else {
      return res.status(200).json({ message: 'Login successful' });
    }
  }
  catch (error) {
    console.error('Error during login', error);
    return res.status(500).json({ error: 'Login failed' });
  }
};

const registerHandler = async (req: Request, res: Response) => { 
  const { username, password, emailAddress, firstName, lastName} = req.body;
  // First sanitize emailAddress, username and password
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

const userInfoHandler = async (req: Request, res: Response) => {
  console.log(req.user); // FIXME ADAM
  res.status(200).send();
}

export {
  loginHandler,
  registerHandler,
  userInfoHandler,
};
