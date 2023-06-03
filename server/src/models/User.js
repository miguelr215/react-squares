import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,
  },
  password: { type: String, required: [true, 'Password is required'] },
  userAvatar: { type: Number, required: [true, 'A userAvatar is required'] },
  usersGames: [{ type: mongoose.Schema.Types.ObjectId, refs: 'games' }],
});

export const UserModel = mongoose.model('users', UserSchema);
