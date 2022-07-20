import React from 'react';
import logo from './logo.svg';
import './Head.css';
import './Flex-grid.css';

function Head() {
    return (
        <div className="Head">
            <header className="Head-header">
                <div className="flex-grid">
                    <div className="col-1">
                        <img src={logo} className="Head-logo" alt="logo"/>
                    </div>
                    <div className="col-7 bg-red">
                        <div className="flex-grid align-items menu-wrapper flex-reverse">
                            <div className="menu-item">
                                <a href={"#"}>Home</a>
                            </div>
                            <div className="menu-item">
                                <a href={"#"}>Home</a>
                            </div>
                            <div className="menu-item">
                                <a href={"#"}>Home</a>
                            </div>
                            <div className="menu-item">
                                <a href={"#"}>Home</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Head;
