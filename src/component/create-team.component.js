import React from 'react';
import { db } from '../firebase';

export default function CreateTeam(){
    const handleCreate = (e) => {
        e.preventDefault();
        let createForm = document.querySelector('#create-form');
        let teamName = createForm.teamName.value;
        let firstName = createForm.firstName.value;
        let secondName = createForm.secondName.value;
        db.collection('TeamName').doc(teamName).set({
            firstName: firstName,
            secondName: secondName,
            firstKill: 0,
            secondKill : 0,
            score : 0
        })
        createForm.teamName.value='';
        createForm.firstName.value='';
        createForm.secondName.value='';
    }

    return(
        <form id='create-form'>
            <input placeholder='teamName' name='teamName'></input>
            <input placeholder='firstName' name='firstName'></input>
            <input placeholder='secondName' name='secondName'></input>
            <button onClick={handleCreate}>Create</button>
        </form>
    );
}