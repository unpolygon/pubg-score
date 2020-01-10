import React from 'react';
import { db } from '../firebase';

export default function fillOut(){
    const renderData = () => {
        let doc = {id:'parn', name: 'Hello', city: 'world'};
        const fillOutList = document.querySelector('#fillOut');

        let li = document.createElement('li');
        let name = document.createElement('span');
        let city = document.createElement('span');
    
        li.setAttribute('data-id', doc.id);
        name.textContent = doc.name;
        city.textContent = doc.city;
    
        li.appendChild(name);
        li.appendChild(city);
        console.log(fillOutList)
        if (fillOutList !== null) fillOutList.appendChild(li);
    }

    return(
        <ul id="fillOut">
            <li>
                <span>Rank 1</span>
                <input placeholder="Your name.."></input>
                <input placeholder="First kill.."></input>
                <input placeholder="Second kill.."></input>
                <button onClick ={renderData()}>Submit</button>
            </li>
        </ul>
    );
}