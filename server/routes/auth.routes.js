const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingUser = await User.findOne({
      where: { email },
    });
    if (existingUser && (await bcrypt.compare(password, existingUser.password))) {
      const user = {
        id: existingUser.id,
        name: existingUser.name,
        email: existingUser.email,
        photo: existingUser.photo,
        coins: existingUser.coins,
      };
      req.session.userId = user.id;
      req.session.user = user;
      res.json(user);
    } else {
      res.json({ islogin: false });
    }
  } catch (error) {
    res.json({ error: 'Server error /login' });
  }
});

authRouter.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('user_sid');
    res.json({ islogin: false });
  } catch (error) {
    res.json({ error: 'Server error /logout' });
  }
});

module.exports = authRouter;
