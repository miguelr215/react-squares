import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  usersGames: [{ type: mongoose.Schema.Types.ObjectId, refs: 'games' }],
});

export const UserModel = mongoose.model('users', UserSchema);
