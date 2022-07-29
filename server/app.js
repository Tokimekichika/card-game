require('@babel/register');
require('dotenv').config();

const express = require('express');
const { sequelize } = require('./db/models');
const configApp = require('/server/config/configApp');

const app = express();
configApp(app);
app.locals.count = 0;

const PORT = process.env.PORT ?? 3000;

// app.get('/stars.txt', (req, res) => {
//   res.sendFile(path.resolve('public', 'stars.txt')); // /public/stars.txt
// })

app.listen(PORT, async () => {
  console.log(`Сервер шуршит на порту ${PORT}`);
  try {
    await sequelize.authenticate();
    console.log('База данных ОК!');
  } catch (error) {
    console.log(error.message); // new Error('mymessage');
  }
});
