import { NavLink, useNavigate } from "react-router-dom";
import React from "react";

// import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEUTRAL } from '@context/ThemeProvider';
//
// import imgSpaceStation from './img/space-station.svg';
// import imgDroid from './img/droid.svg';
// import imgLightsaber from './img/lightsaber.svg';
import styles from './NavBar.module.css';
import Money from "../Money";
import { useDispatch, useSelector } from 'react-redux'
import { authLogout } from "../../store/auth/actionCreator";

const NavBar = () => {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.auth.user)
    // console.log(user)
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
        <div className={styles.container}>
            {/*<img className={styles.logo} src={icon} alt="Star Wars"/>*/}
            <ul className={styles.list__container}>
                {/* {user.id ?   
                  <>
                   <li><NavLink to="/main">На главную</NavLink></li>
                  <li><NavLink to='/pc'>{`ПРИВЕТ, ${user.name}!`}</NavLink></li>
                  <li><NavLink to="/" onClick={logoutHandler}>Logout</NavLink></li>
                  </>
                :
                <>
                <li><NavLink to="/main" className={styles.logotip}/></li>
                  {/* <li><NavLink to='/registration'>Reg</NavLink></li>
                  <li><NavLink to='/login'>Log</NavLink></li> */}
                <li><NavLink to="/home">Home</NavLink></li>
                {user.id ?
                  <>
                  <li><NavLink to='/pc'>{`ПРИВЕТ,${user.name}!`}</NavLink></li>
                  <li><NavLink to="/" onClick={logoutHandler}>Logout</NavLink></li>
                  <li><NavLink to="/editdeck">DECKS</NavLink></li>
                  </>
                :
                  <>
                  <li><NavLink to='/registration'>Reg</NavLink></li>
                  <li><NavLink to='/login'>Log</NavLink></li>
                  </>
                }
            </ul>
            <Money />
        </div>
    )
}


export default NavBar;
