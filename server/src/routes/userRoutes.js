import express from 'express';
import * as userController from '../controllers/userController.js';

const router = express.Router();

router.route('/register').post(userController.registerUser);
router.route('/login').post(userController.loginUser);

export { router as userRouter };
