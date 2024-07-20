import User, { IUser } from '../models/user';
import jwt from 'jsonwebtoken';

const generateAuthToken = (user: IUser) => {
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET!, {
    expiresIn: '1h',
  });
  return token;
};

export const register = async (userData: Partial<IUser>) => {
  const user = new User(userData);
  await user.save();
  const token = generateAuthToken(user);
  return { user, token };
};

export const login = async (loginData: { username: string, password: string }) => {
  const user = await User.findOne({ username: loginData.username });
  if (!user || !(await user.comparePassword(loginData.password))) {
    throw new Error('Invalid login credentials');
  }
  const token = generateAuthToken(user);
  return token;
};

export default { register, login };
