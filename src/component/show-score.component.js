import React, { useState, useEffect } from 'react';
import './show-score.component.css';

export default function showScore(){
    var counter = 0;

    const renderData = () => {
        counter++;
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
        let rank = document.createElement('span');
        let teamName = document.createElement('span');
        let name = document.createElement('div');
        let firstName = document.createElement('span');
        let secondName = document.createElement('span');
        let kill = document.createElement('div');
        let firstKill = document.createElement('span');
        let secondKill = document.createElement('span');
        let score = document.createElement('span');
        
        name.className='name';
        kill.className='kill';
        firstName.className='rank';
        firstName.className='firstName';
        secondName.className='secondName';
        firstKill.className='firstKill';
        secondKill.className='secondKill';
        score.className='score';
        
        li.setAttribute('data-id', doc.id);
        rank.textContent=counter;
        teamName.textContent=doc.id;
        firstName.textContent=doc.firstName;
        secondName.textContent=doc.secondName;
        firstKill.textContent=doc.firstKill;
        secondKill.textContent=doc.secondKill;
        score.textContent=doc.score;
        
        name.appendChild(firstName);
        name.appendChild(secondName);
        kill.appendChild(firstKill);
        kill.appendChild(secondKill);


        li.appendChild(rank);
        li.appendChild(teamName);
        li.appendChild(name);
        li.appendChild(kill);
        li.appendChild(score);

        if (teamList !== null) teamList.appendChild(li);
    }
    return(
        <div className='showScore'>
            <button onClick ={renderData}>Show</button>
            <ul id ='team'>
                <li className='head'>
                    <span>Rank</span>
                    <span>Team</span>
                    <span>Name</span>
                    <span>Kill</span>
                    <span>Score</span>
                </li>
            </ul>
        </div>
    );
}