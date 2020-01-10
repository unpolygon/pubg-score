import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.component.css';

export default function navBar(){
    return(
        <div className='navBar'>
            <Link to="/" className="navBar-Link">Fill Out</Link>
            <Link to="/Edit" className="navBar-Link">Show Score</Link>
        </div>
    );
}