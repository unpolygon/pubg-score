import React, { useState, useEffect, useLayoutEffect } from 'react';
import { db } from '../firebase';
import './show-score.component.css';

const ShowScore = () => {
    var counter = 0;
    
    useEffect(() => {
        getData();
    });

    const getData = () => {
        // db.collection('TeamName').orderBy('score','desc').get().then(docs => {
        //     docs.forEach(doc => {
        //         renderData(doc);
        //     });
        // });
        db.collection('TeamName').orderBy('score','desc').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change => {
                console.log(change.doc.data(),change.type);
                if(change.type=='added' || change.type=='modified'){
                    renderData(change.doc)
                }
            });
        });
    }

    const renderData = (doc) => {
        counter++;
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
        firstName.textContent=doc.data().firstName;
        secondName.textContent=doc.data().secondName;
        firstKill.textContent=doc.data().firstKill;
        secondKill.textContent=doc.data().secondKill;
        score.textContent=doc.data().score;
        
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

export default ShowScore;