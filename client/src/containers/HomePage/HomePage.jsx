import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css'
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate()

    return (
        <>
            <div className='home-container'>
              <div className='button-container'>
                <div className='start-game-button-container'>

                <button onClick={() => navigate('/room')} className = 'start-game-btn'>

                    Играть
                </button>
                </div>
              </div>
              <div className='icons-container'>

                <div className='link-container-store'><Link to='/buy' className='store-icon'/></div>
                <div className='link-container-library' onClick={() => navigate('/mydeck')}><Link to='' className='library-icon'/></div>

                </div>
            </div>
        </>
    );
}

export default HomePage;
