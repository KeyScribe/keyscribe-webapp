import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import dotenv from 'dotenv';
import path from 'path';
import { validateHardwareId, getPID, getOwner, setOwner, createKeyboard } from '../db/auth-db';

dotenv.config({ path: path.resolve(__dirname, '../../.env')});
const JWT_SECRET: string = process.env.JWT_SECRET!;

const authorizeKeyboard = async (req: Request, res: Response) => {
    
    const hardwareId = parseInt(req.query.hardwareId as string);

    // Hardware ID is confirmed to be valid
    if(!await validateHardwareId(hardwareId)) {
        res.status(401);
        res.send();
    }

    // If the keyboard is already registered, get its ID,
    // otherwise create a new keyboard in DB
    let pid = await getPID(hardwareId)
    let owner: string;

    if(pid !== -1){
        owner = await getOwner(pid);
    } else {
        owner = "";
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
    res.send({ token: jwt });
};

const claimKeyboard = async (req: Request, res: Response) => {

    // User initiates request to claim an unclaimed keyboard
    const requestedPID = parseInt(req.params.pid);
    const userId = parseInt(req.params.userId); // FIXME: User id should be a part of the session

    // NOT IMPLEMENTED FOR DESIGN PROTOTYPE: Keyboard consents to being claimed

    // Owner is set in DB
    if(await setOwner(userId, requestedPID)) {

        // FIXME: JWT is returned to Pi
        const jwt = sign(
            {
                'sub': userId,
                'PID': requestedPID
            },
            JWT_SECRET,
            { expiresIn: 900 } // JWT expires in 15 minutes
        );

        res.status(200);
        res.send();

    } else {
        res.status(400);
        res.send('Keyboard already owned by another');
    }
    
}

export {
    authorizeKeyboard,
    claimKeyboard,
};
