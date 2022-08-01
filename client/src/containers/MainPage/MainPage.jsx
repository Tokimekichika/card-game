import React from 'react';
import { useNavigate } from 'react-router-dom';
// import NavBar from '../../components/NavBar';
import './MainPage.css';

const MainPage = () => {
  const navigate = useNavigate()



    return (
        <div className='container'>
            <form className='form-container'>
                <div className='buttons-container'>
              <button onClick='' className='auth-btn'>
                Авиторизация
              </button>
              <button  onClick='' className='rega-btn'>
              Регистрация
              </button>
                </div>
            </form>
        </div>
    )
}


export default MainPage;
