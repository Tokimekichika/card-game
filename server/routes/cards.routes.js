const cardsRouter = require('express').Router();
const { User, card_deck,Decks,Sequelize } = require('../db/models');

// Получение колод пользователя
cardsRouter.post('/deck/:deckid/builddeck', async (req, res) => {
    try {
        const myDeck = await card_deck.findAll()
        if (myDeck.length < 30) {
            // const user = await User.findOne({ where: { id: req.session.user.id } });
            const {deckid} = req.params
            const {id} = req.body
            const userDeck = await card_deck.create({
                card_id: id,
                deck_id: +deckid,
            })
            // console.log(userDeck)
            res.json({userDeck,status:'Card add to user deck'})
        }
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Произошла ошибка',
            error,
        });
    }
});

cardsRouter.delete('/deck/:deckid/del/:id', async (req, res) => {
    try {
        // const user = await User.findOne({ where: { id: req.session.user.id } });
        const {deckid,id} = req.params
        const userDeck = await card_deck.destroy({where:{
            card_id: +id,
            deck_id: +deckid,
        }})
        // console.log(userDeck)
        res.status(200).json('Card delete from deck')
    } catch (error) {
        console.log(error)
        res.json({
            message: 'Произошла ошибка',
            error,
        });
    }
});

module.exports = cardsRouter;
