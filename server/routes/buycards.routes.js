const buyCards = require('express').Router();
const { User,Card } = require('../db/models');

// Получение колод пользователя
buyCards.get('/', async (req, res) => {
    try {
        const user = await User.findOne({where:{id:req.session.user.id}})
            if(user.coins >=100){
            const res = await User.decrement(
                'coins', {by: 100,
                where: {
                    id:req.session.user.id,
                },
            });
            const buycard = await Card.findAll({ order: sequelize.random(), limit: 5 })
            res.json(buycard);
        } else {
            res.status(500)
        }
    } catch (error) {
        res.json({
            message: 'Произошла ошибка',
            error,
        });
    }
});

module.exports = buyCards;
