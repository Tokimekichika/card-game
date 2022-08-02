import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

import styles from './NavBar.module.css';
import Money from "../Money";
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from "../../store/auth/actionCreator";

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()
   

    const logoutHandler = (event) => {
      event.preventDefault()
      fetch('/auth/logout')
        .then(data => data.json())
        .then(responce => {
          if (responce.islogin === false) {
            dispatch(authLogout());
            navigate('/')
          }
        })
    }

    return (
        // ДОБАВИТЬ УСЛОВНЫЙ РЕНДЕРИНГ
        <div className={styles.container}>
            <ul className={styles.list__container}>

                {user.id ?
                  <>
                  <li><NavLink to='/pc'>{`ПРИВЕТ,${user.name}!`}</NavLink></li>
                  <li><NavLink to="/" onClick={logoutHandler}>Выйти</NavLink></li>
                  <li><NavLink to="/editdeck">Мои карточки</NavLink></li>
                  <li><NavLink to="/home">Домой</NavLink></li>
                  </>
                :
                <li><NavLink to="/main">На главную</NavLink></li>
                }
            </ul>
            <Money />
        </div>
    )
}


export default NavBar;
