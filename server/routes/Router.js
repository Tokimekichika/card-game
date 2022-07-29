const Router = require('express').Router();
// const multer = require('multer');
const { Post } = require('../db/models');

Router.delete('/:id', async (req, res) => {
  try {
    if (res.locals.user.login) {
      await Post.destroy({ where: { id: req.params.id } });
      res.json({ status: 'ok' });
    } else {
      res.redirect('/');
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

Router.post('/add', async (req, res) => {
  try {
    if (res.locals.user.login) {
      const { content, image_url } = req.body;
      const post = await Post.findOne({
        where: {
          content,
        },
      });
      if (post) {
        res.json({ status: 'notok', errorMessage: 'такой щебет уже есть!' });
        return;
      }
      await Post.create({
        content,
        image_url,
        likes: 0,
        dislikes: 0,
        user_name: req.session.user.login,
      });
      res.json({ status: 'ok' });
    } else {
      res.redirect('/');
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

Router.put('/:id', async (req, res) => {
  try {
    if (res.locals.user.login) {
      const { content, image_url } = req.body;
      await Post.update({
        content,
        image_url,
      }, {
        where: {
          id: req.params.id,
        },
        returning: true,
        plain: true,
      });
      res.json({ status: 'ok' });
    } else {
      res.redirect('/pc');
    }
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

module.exports = Router;
