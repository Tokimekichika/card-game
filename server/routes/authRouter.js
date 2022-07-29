const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

authRouter.post('/registration', async (req, res) => {
  try {
    const {
      login, email, password,
    } = req.body;
    const user = await User.findOne({
      where: {
        login,
      },
    });
    if (!email.includes('@')) {
      res.json({ status: 'email check', errorMessage: 'Введите корректную почту' });
      return;
    }
    if (password.length < 8) {
      res.json({ status: 'password check', errorMessage: 'Пароль меньше 8 символов' });
      return;
    }
    if (user) {
      res.json({ status: 'notok', errorMessage: 'Пользователь уже зарегистрирован' });
      return;
    }
    const hash = await bcrypt.hash(req.body.password, 10);
    await User.create({
      login,
      email,
      password: hash,
    });
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

authRouter.post('/login', async (req, res) => {
  try {
    const { login, password } = req.body;
    const user = await User.findOne({
      where: {
        login,
      },
    });
    if (!user) {
      res.json({ status: 'notok', errorMessage: 'Такого пользователя не существует' });
      return;
    }
    const authOk = await bcrypt.compare(password, user.password);
    if (!authOk) {
      res.send({ status: 'notok', errorMessage: 'Неверный пароль!' });
    }
    req.session.user = user;
    res.json({ status: 'ok' });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

authRouter.get('/logout', async (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.redirect('/');
});

module.exports = authRouter;
