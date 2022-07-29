const viewsRouter = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Registration = require('../views/Registration');
const Login = require('../views/Login');
const { Post, User, Like } = require('../db/models');
const PostsList = require('../views/PostList');
const AddPost = require('../views/AddPost');
const EditPost = require('../views/EditPost');
const PersonalCab = require('../views/PersonalCab');
const Load = require('../views/load');

viewsRouter.get('/', async (req, res) => {
  let post;
  try {
    post = await Post.findAll();
    const postlist = React.createElement(PostsList, { post, title: 'Щебетальня', user: res.locals.user });
    // console.log('123123');
    const html = ReactDOMServer.renderToStaticMarkup(postlist);
    res.write('<!doctype html>');
    res.end(html);
  } catch (error) {
    res.status(500).send('Ошибка, что-то пошло не так');
  }
});

viewsRouter.get('/registration', (req, res) => {
  try {
    if (!res.locals.user?.name) {
      const regform = React.createElement(Registration, { user: res.locals.user });
      const html = ReactDOMServer.renderToStaticMarkup(regform);
      res.write('<!doctype html>');
      res.end(html);
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.status(500).send('Database failure');
  }
});

viewsRouter.get('/login', (req, res) => {
  try {
    if (!res.locals.user?.name) {
      const login = React.createElement(Login, { user: res.locals.user });
      const html = ReactDOMServer.renderToStaticMarkup(login);
      res.write('<!doctype html>');
      res.end(html);
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.status(500).send('Database failure');
  }
});

viewsRouter.get('/posts/add', (req, res) => {
  try {
    if (res.locals.user?.login) {
      const post = React.createElement(AddPost, { user: res.locals.user });
      const html = ReactDOMServer.renderToStaticMarkup(post);
      res.write('<!doctype html>');
      res.end(html);
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.status(500).send('Войди в аккаунт');
  }
});

viewsRouter.get('/edit/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findByPk(id);
    const edPost = React.createElement(EditPost, { post });
    const html = ReactDOMServer.renderToStaticMarkup(edPost);
    res.write('<!doctype html>');
    res.end(html);
  } catch (error) {
    res.status(500).send('Database failure');
  }
});

viewsRouter.get('/pc', async (req, res) => {
  try {
    if (res.locals.user?.login) {
      const post = await Post.findAll({ where: { user_name: req.session.user.login } });
      const allPost = React.createElement(PersonalCab, { post, user: res.locals.user });
      const html = ReactDOMServer.renderToStaticMarkup(allPost);
      res.write('<!doctype html>');
      res.end(html);
    } else {
      res.redirect('/');
    }
  } catch (error) {
    res.status(500).send('Database failure');
  }
});

viewsRouter.get('/posts/upload', (req, res) => {
  Post.findOne({ where: { user_name: req.session.user.login } });
  const upload = React.createElement(Load, {});
  const html = ReactDOMServer.renderToStaticMarkup(upload);
  res.write('<!doctype html>');
  res.end(html);
});

viewsRouter.post('/', async (req, res) => {
  const { post_id } = req.body;
  const findPost = await Post.findOne({ where: { id: post_id } });
  const findLikes = await Like.findOne({ where: { post_id } });
  if (!findLikes) {
    Like.create({
      user_name: req.session.user.login,
      post_id,
    });
    await findPost.increment('likes', { by: 1 });
    res.json({ status: 'ok' });
  } else {
    const delLike = await Like.destroy({ where: { post_id } });
    await findPost.decrement('likes', { by: 1 });
    res.json({ status: 'del' });
  }
});

module.exports = viewsRouter;
