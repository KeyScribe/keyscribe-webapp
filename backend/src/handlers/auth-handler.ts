import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import { validateHardwareId, getPID, getOwner, createKeyboard } from '../db/db';

dotenv.config({ path: path.resolve(__dirname, '../../.env')});
const JWT_SECRET: string = process.env.JWT_SECRET!;

const authorizeKeyboard = async (req: Request, res: Response) => {
    
    const hardwareId = parseInt(req.params.hardwareId);

    if(!validateHardwareId(hardwareId)) {
        res.status(401);
        res.send();
    }

    let pid = await getPID(hardwareId)
    let owner: number;

    if(pid !== -1){
        owner = await getOwner(pid);
    } else {
        owner = -1;
        pid = await createKeyboard(hardwareId)
    }

    const jwt = sign(
        {
            'sub': owner,
            'PID': pid
        },
        JWT_SECRET,
        { expiresIn: 900 } // JWT expires in 15 minutes
    );

    res.status(200);
    res.send(jwt);
};

const claimKeyboard = (req: Request, res: Response) => {

    // User initiates request to claim an unclaimed keyboard

    // Keyboard consents to being claimed

    // JWT is issued to keyboard with 
    const jwt = sign(
        {
            'sub': '1234', // REPLACE THIS WITH USER ID!!!!
            'PID': '4321' // Replace with internal Keyboard ID
        },
        JWT_SECRET,
        { expiresIn: 900 } // JWT expires in 15 minutes
    );
}
  
// eslint-disable-next-line import/prefer-default-export
export {
    authorizeKeyboard,
    claimKeyboard,
};