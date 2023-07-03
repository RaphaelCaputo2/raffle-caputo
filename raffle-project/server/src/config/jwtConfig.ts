import jwt from 'jsonwebtoken';

export default {
  secret: process.env.JWT_SECRET || 'secret',
  expiresIn: '1d',
  generateToken: (id: string) => {
    return jwt.sign({ id }, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1d',
    });
  },
  verifyToken: (token: string) => {
    return jwt.verify(token, process.env.JWT_SECRET || 'secret');
  },
};