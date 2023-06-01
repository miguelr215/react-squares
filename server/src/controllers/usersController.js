import { UserModel } from '../models/Users.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (user) {
      return res.status(409).json({
        status: 'fail',
        message: 'User already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new UserModel({ username, password: hashedPassword });
    const addedUser = await newUser.save();

    res.status(200).json({
      status: 'success',
      data: {
        addedUser,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error registering user ${req.params.id}: ${error}`,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'User Not Found',
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(403).json({
        status: 'fail',
        message: 'Incorrect Password',
      });
    }

    const token = jwt.sign({ id: user._id }, 'secret');

    res.status(200).json({
      status: 'success',
      data: {
        user,
        token,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: 'fail',
      message: `Error getting user ${req.params.id}: ${error}`,
    });
  }
};
