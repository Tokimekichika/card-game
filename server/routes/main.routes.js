const mainRouter = require('express').Router();
const { User } = require('../db/models');

// Получение колод пользователя
mainRouter.get('/', async (req, res) => {
    try {
        const user = await User.findOne({where:{id:req.session.user.id}})
        res.json(user);
    } catch (error) {
        res.json({
            message: 'Пользователь не найден',
            error,
        });
    }
});

module.exports = mainRouter;
