import React from 'react';
import { db } from '../firebase';

export default function fillOut(){
    return(
        <ul id="fillOut">
            <li>
                <span>Rank 1</span>
                <input placeholder="Your name.."></input>
                <input placeholder="First kill.."></input>
                <input placeholder="Second kill.."></input>
                <button>Submit</button>
            </li>
        </ul>
    );
}