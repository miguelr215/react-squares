import express from 'express';
import * as usersController from '../controllers/usersController.js';

const router = express.Router();

router.route('/register').post(usersController.registerUser);
router.route('/login').post(usersController.loginUser);

export { router as usersRouter };
