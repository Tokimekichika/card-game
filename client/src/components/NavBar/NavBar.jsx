import React from 'react';



import { NavLink, useNavigate } from "react-router-dom";
// import { useState, useEffect} from "react";

// import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
//
// import imgSpaceStation from './img/space-station.svg';
// import imgDroid from './img/droid.svg';
// import imgLightsaber from './img/lightsaber.svg';
import styles from './NavBar.module.css';
import Money from "../Money";
// import MainPage from '../../containers/MainPage/MainPage';
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from "../../store/auth/actionCreator";

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
  const navigate = useNavigate()
    // const isTheme = useTheme()
    // const [icon, setIcon] = useState(imgSpaceStation);
    // useEffect(()=>{
    //     switch (isTheme.theme) {
    //         case THEME_LIGHT:setIcon(imgLightsaber);break
    //         case THEME_DARK: setIcon(imgSpaceStation); break;
    //         case THEME_NEUTRAL: setIcon(imgDroid); break;
    //         default: setIcon(imgSpaceStation);
    //     }
    // },[isTheme])

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
        <div>
        <div className={styles.container}>
            {/*<img className={styles.logo} src={icon} alt="Star Wars"/>*/}
            <div>
            <ul className={styles.list__container}>
                <li><NavLink to="/home">Домой</NavLink></li>
                {user.id ?   
                  <>
                  <li><NavLink to='/pc'>{`ПРИВЕТ, ${user.name}!`}</NavLink></li>
                  <li><NavLink to="/" onClick={logoutHandler}>Выйти</NavLink></li>
                  </>
                :
                  <>
                  <li><NavLink to='/registration'>Зарегистрироваться</NavLink></li>
                  <li><NavLink to='/login'>Авторизоваться</NavLink></li>
                  </>
                }
            </ul>
            </div>
            <Money />
        </div>
        </div>
    )
}


export default NavBar;
