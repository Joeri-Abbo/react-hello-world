import React from 'react';
import logo from './logo.svg';
import './Footer.css';
import './Flex-grid.css';

function Head() {
    return (
        <div className="Head">
            <header className="Head-header">
                <div className="flex-grid justify-content flex-direction-column">
                    <div className={'center'}>
                        <img src={logo} className="Footer-logo" alt="logo"/>
                    </div>
                    <div className={'center copyright'}>
                       Copyright © 2022
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Head;
