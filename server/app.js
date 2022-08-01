require('@babel/register');
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');
const configApp = require('./config/configApp');

// импортируем роутеры
const regRouter = require('./routes/reg.routes');
const authRouter = require('./routes/auth.routes');
const deckRouter = require('./routes/deck.routes');

const app = express();
configApp(app);
app.locals.count = 0;

const PORT = process.env.PORT ?? 4000;

// app.get('/stars.txt', (req, res) => {
//   res.sendFile(path.resolve('public', 'stars.txt')); // /public/stars.txt
// })

// подключаем роутеры
app.use('/registration', regRouter);
app.use('/auth', authRouter);
app.use('/', deckRouter);

app.listen(PORT, async () => {
  console.log(`Сервер шуршит на порту ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База данных ОК!');
  } catch (error) {
    console.log(error.message); // new Error('mymessage');
  }
});
