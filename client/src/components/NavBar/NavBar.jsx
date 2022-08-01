import React from 'react';

import { NavLink } from "react-router-dom";
// import { useState, useEffect} from "react";

// import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
//
// import imgSpaceStation from './img/space-station.svg';
// import imgDroid from './img/droid.svg';
// import imgLightsaber from './img/lightsaber.svg';
import styles from './NavBar.module.css';
import Money from "../Money";
import MainPage from '../../containers/MainPage/MainPage';

const NavBar = () => {
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

    return (
        // ДОБАВИТЬ УСЛОВНЫЙ РЕНДЕРИНГ
        <div className={styles.container}>
            {/*<img className={styles.logo} src={icon} alt="Star Wars"/>*/}
            <ul className={styles.list__container}>
                <li><NavLink to="/home">Home</NavLink></li>
                <li><NavLink to='/pc'>ПРИВЕТ,ИМЯ!</NavLink></li>
                <li><NavLink to="/logout">Logout</NavLink></li>
            </ul>
            <Money />
        </div>
    )
}


export default NavBar;
