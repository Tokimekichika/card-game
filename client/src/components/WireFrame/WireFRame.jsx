import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar';

function WireFRame(props) {
    return (
        <div>
            <NavBar />
            <Outlet />
        </div>
    );
}

export default WireFRame;