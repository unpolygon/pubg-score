import React from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.component.css';
import $ from 'jquery';

export default function navBar(){
    const handleClick = (e) => {
        $('a').focus(function(){
            $(this).addClass('active');
        });
        $('a').blur(function(){
            $(this).removeClass('active');
        })
    }

    return(
        <div className='navBar'>
            <Link to="/" className="navBar-Link" id='fill-out' onClick={handleClick}>Fill Out</Link>
            <Link to="/Edit" className="navBar-Link" id='show-score' onClick={handleClick}>Show Score</Link>
            <Link to="/Create" className="navBar-Link" id='create' onClick={handleClick}>Create</Link>
        </div>
    );
}