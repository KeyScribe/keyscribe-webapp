import { Router } from 'express';
import { loginHandler, registerHandler, logoutHandler } from '../handlers/login-handler';
import { userInfoHandler, addFriend } from '../handlers/user-handler';
import { ledOn } from '../handlers/led-handler';
import { claimKeyboard, authorizeKeyboard } from '../handlers/keyboard-handler';
import { authenticate, isAuthenticated } from './middleware';

const router = Router();

router.post('/login', authenticate, userInfoHandler);
router.delete('/logout', isAuthenticated, logoutHandler);
router.post('/register', registerHandler);
router.post('/led', ledOn);
router.post('/claim', claimKeyboard); // WARNING! DOES NOT WORK YET
router.post('/friend', addFriend); // DOES NOT WORK YET
router.get('/authorize', authorizeKeyboard);
router.get('/getUserInfo', isAuthenticated, userInfoHandler);
router.get('/userLoggedIn', isAuthenticated, (req, res) => {
    return res.status(200).send();
});

export default router;