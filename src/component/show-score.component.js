import React, { useState, useEffect } from 'react';

export default function showScore(){
    useEffect(()=>{
        renderData;
    });

    const renderData = () => {
        let doc = {
            id: 'iaun',
            firstName: 'Parn',
            secondName: 'Milly', 
            firstKill: 0, 
            secondKill: 0 , 
            score: 0
        };
        const teamList = document.querySelector('#team');

        let li = document.createElement('li');
        let teamName = document.createElement('span');
        let firstName = document.createElement('span');
        let secondName = document.createElement('span');
        let firstKill = document.createElement('span');
        let secondKll = document.createElement('span');
        let score = document.createElement('span');
        
        firstName.className='firstName';
        secondName.className='secondName';
        firstKill.className='firstKill';
        secondKll.className='secondKll';
        score.className='score';
        
        li.setAttribute('data-id', doc.id);
        teamName.textContent=doc.id;
        firstName.textContent=doc.firstName;
        secondName.textContent=doc.secondName;
        firstKill.textContent=doc.firstKill;
        secondKll.textContent=doc.secondKll;
        score.textContent=doc.score;
    
        li.appendChild(teamName);
        li.appendChild(firstName);
        li.appendChild(secondName);
        li.appendChild(firstKill);
        li.appendChild(secondKll);
        li.appendChild(score);

        if (teamList !== null) teamList.appendChild(li);
    }
    return(
        <div className='showScore'>
            <button onClick ={renderData}>Show</button>
            <ul id ='team'>
                <li className='Head'>
                    <p></p>
                </li>
            </ul>
        </div>
    );
}