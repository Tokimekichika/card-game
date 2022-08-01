import React from 'react';
import './HomePage.css'

function HomePage() {
    return (
        <>
            <div className='home-container'>
              <div className='button-container'>
                <div className='start-game-button-container'>
                <button className = 'start-game-btn'>
                    Играть
                </button>
                </div>
              </div>
              <div className='icons-container'>
                <div className='link-container-store'><link className='store-icon'>
                    </link></div>
                    <div className='link-container-library'><link className='library-icon'>
                    </link></div>
                    
                </div>
            </div>
        </>
    );
}

export default HomePage;