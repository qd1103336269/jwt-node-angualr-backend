import mongoose, { Schema } from 'mongoose';

export const UserSchema = new Schema ({
  username: String,
  password: String
})

export const User = mongoose.model('user', UserSchema)
