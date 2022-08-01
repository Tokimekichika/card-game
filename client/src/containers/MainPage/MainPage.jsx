import React from 'react';
// import NavBar from '../../components/NavBar';
import './MainPage.css';

const MainPage = () => {
    return (
        <div className='container'>
            <form className='form-container'>
                <div className='button-container'>
              <button className='auth-btn'>
                Авиторизация
              </button>
              <button className='rega-btn'>
              Регистрация
              </button>
                </div>
            </form>
        </div>
    )
}


export default MainPage;
