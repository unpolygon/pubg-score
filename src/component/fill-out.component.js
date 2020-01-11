import React, {useEffect, useState} from 'react';
import { db } from '../firebase';
import './fill-out.component.css';

export default function FillOut(){
    const [playerList, setPlayerList] = useState([]);
    const [rankCounter, setRankCounter] = useState(1);

    useEffect(() => {
        db.collection('TeamName').get().then(docs => {
            docs.forEach(doc => {
                let _ = doc.data();
                let firstAndSecondName = [_.firstName,_.secondName];
                setPlayerList(playerList.concat(firstAndSecondName));
            })
        });
    },[]);

    const postData = (doc) => {
        var DataRegUser = document.querySelector('#pushData');
        var playerName = DataRegUser.playerName.value;
        var playerKill = DataRegUser.playerKill.value;
        var restPlayerKill = DataRegUser.restPlayerKill.value;
        let firstKill = 0;
        let secondKill = 0;

        if (playerName == doc.data().firstName){
            firstKill = playerKill;
            secondKill = restPlayerKill;
        }else{
            secondKill = playerKill;
            firstKill = restPlayerKill;
        }
       
        db.collection('TeamName').doc(doc.id).update({
            firstKill: firstKill,
            secondKill : secondKill
        })

        let numberOfTeam = 9;
        setRankCounter(rankCounter%(numberOfTeam)+1);
        DataRegUser.playerName.value = '';
        DataRegUser.playerKill.value = '';
        DataRegUser.restPlayerKill.value = '';
    }

    const uploadDataPubg = e => {
        e.preventDefault();
        var DataRegUser = document.querySelector('#pushData');
        var playerName = DataRegUser.playerName.value;
        db.collection('TeamName').get().then(docs => {
            docs.forEach(doc => {
                    if(playerName == doc.data().firstName || 
                        playerName == doc.data().secondName){
                            postData(doc);
                    }
                }
            )
      })
    }


    return(
        
        <ul id="fillOut">
            <li>
                <form id = 'pushData'>
                    <span>Rank: {rankCounter}</span>
                    <input list="playerName" name='playerName'></input>
                    <datalist id ='playerName' placeholder="Your name..">
                        {
                            playerList.map(player => {
                                return <option>{player}</option>
                            })
                        }
                    </datalist>
                    <input name='playerKill' placeholder="First kill.."></input>
                    <input name='restPlayerKill' placeholder="Second kill.."></input>
                    <button onClick ={uploadDataPubg}>Submit</button>
                    </form>
            </li>
        </ul>
    );
}