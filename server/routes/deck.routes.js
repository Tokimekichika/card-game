const deckRouter = require('express').Router();
const { Deck } = require('../db/models');

// Получение колод пользователя
deckRouter.get('/mydeck', async (req, res) => {
  try {
    const { id } = req.session.user;
    const userdeck = await Deck.findAll({
      raw: true,
      where: {
        user_id: id,
      },
    });
    res.json(userdeck);
  } catch (error) {
    console.log(error.message);
    res.json({
      message: 'Произошла ошибка получения колод пользователя',
      error,
    });
  }
});

module.exports = deckRouter;
