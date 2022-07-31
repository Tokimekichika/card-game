import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import './register.css';
import { authReg } from '../../../store/auth/actionCreator';

function Register() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const regHandler = (event) => {
    event.preventDefault();
    if (event.target.password.value.length >= 8) {
      fetch('/registration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login: event.target.login.value.trim(),
          email: event.target.email.value.trim(),
          password: event.target.password.value,
        }),
      }).then((responce) => responce.json())
        .then((responce) => {
          if (responce.isRegistration === false) {
            alert('Такой пользователь уже существует');
          } else {
            dispatch(authReg(responce));
            navigate('/');
          }
        });
    } else {
      alert('Пароль должен содержать более 8 символов')
    }  
  };

  return (
    
    <div className="card">
      <div className="card-image">
        <h2 className="card-heading">Регистрация</h2>
      </div>
      <form className="card-form" onSubmit={regHandler}>
        <div className="input">
          <input
            type="text"
            className="input-field"
            name="login"
            autoComplete="off"
            required
          />
          <label className="input-label">Логин</label>
        </div>
        <div className="input">
          <input
            type="text"
            className="input-field"
            name="email"
            autoComplete="off"
            required
          />
          <label className="input-label">Почта</label>
        </div>
        <div className="input">
          <input
            type="password"
            className="input-field"
            name="password"
            autoComplete="off"
            required
          />
          <label className="input-label">Пароль</label>
        </div>
        <div className="action">
          <button type="submit" className="action-button">
            Зарегестрироваться
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
