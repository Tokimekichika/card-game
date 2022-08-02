import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage() {
    return (
        <>
            <div className='home-container'>
              <div className='button-container'>
                <div className='start-game-button-container'>
                <form action='/' >
                <button className = 'start-game-btn'>
                    Играть
                </button>
              </form>
                </div>
              </div>
              <div className='icons-container'>
                <div className='link-container-store'><Link to='/buy' className='store-icon'/></div>
                <div className='link-container-library'><Link to='/mydeck' className='library-icon'/></div>
                </div>
            </div>
        </>
    );
}

export default HomePage;