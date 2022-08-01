const deckRouter = require('express').Router();
const { Deck } = require('../db/models');

// Получение колод пользователя
deckRouter.get('/mydeck', async (req, res) => {
  try {
    const userId = req.session.user.id;
    const userDeck = await Deck.findAll({
      where: {
        user_id: userId,
      },
    });
    console.log('🚀 ~ file: deck.routes.js ~ line 12 ~ deckRouter.get ~ userDeck', userDeck);
    res.json(userDeck);
  } catch (error) {
    res.json({
      message: 'Произошла ошибка получения колод пользователя',
      error,
    });
  }
});

module.exports = deckRouter;
