import express from 'express';
import { Admin } from '../models/adminModel';
import { check, validationResult } from 'express-validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { jwtConfig } from '../config/jwtConfig';

const router = express.Router();

// Admin Registration
router.post(
  '/register',
  [
    check('username', 'Please Enter a Valid Username').not().isEmpty(),
    check('password', 'Please enter a valid password').isLength({
      min: 6
    })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array()
      });
    }

    const { username, password } = req.body;
    try {
      let admin = await Admin.findOne({
        username
      });
      if (admin) {
        return res.status(400).json({
          msg: 'Admin Already Exists'
        });
      }

      admin = new Admin({
        username,
        password
      });

      const salt = await bcrypt.genSalt(10);
      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      const payload = {
        admin: {
          id: admin.id
        }
      };

      jwt.sign(
        payload,
        jwtConfig.secret,
        {
          expiresIn: 10000
        },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({
            token
          });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send('Error in Saving');
    }
  }
);

export default router;