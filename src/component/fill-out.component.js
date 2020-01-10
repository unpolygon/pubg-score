import React from 'react';
import { db } from '../firebase';

export default function fillOut(){
    // const renderData = () => {
    //     let doc = {id:'parn', name: 'Hello', city: 'world'};
    //     const fillOutList = document.querySelector('#fillOut');

    //     let li = document.createElement('li');
    //     let name = document.createElement('span');
    //     let city = document.createElement('span');
    
    //     li.setAttribute('data-id', doc.id);
    //     name.textContent = doc.name;
    //     city.textContent = doc.city;
    
    //     li.appendChild(name);
    //     li.appendChild(city);
    //     console.log(fillOutList)
    //     if (fillOutList !== null) fillOutList.appendChild(li);
    // }

    const uploadDataPubg = e => {
        e.preventDefault();
        let DataRegUser = document.querySelector('#pushData');
        db.collection('TeamName').get().then(docs => {
            docs.forEach(doc => {
                    if(DataRegUser.first_Name.value === 'PERSiACaT'){
                        db.collection('TeamName').doc('ALGO-HeroNoon').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                    }
                    else if(DataRegUser.first_Name.value === 'Icetea'){
                        db.collection('TeamName').doc('ALGO:Nazaori-IceTea').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                    }
                    else if(DataRegUser.first_Name.value === 'Korawitzzzzzz'){
                        db.collection('TeamName').doc('DesertFox').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                      }
                    else if(DataRegUser.first_Name.value === 'Darmmy'){
                        db.collection('TeamName').doc('tung jai study').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                    }
                    else if(DataRegUser.first_Name.value === 'SUGAZ'){
                        db.collection('TeamName').doc('ฺBig O').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                    }
                    else if(DataRegUser.first_Name.value === 'Thelastsun'){
                        db.collection('TeamName').doc('Big C').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                    }
                    else if(DataRegUser.first_Name.value === 'ririinyourarea'){
                        db.collection('TeamName').doc('FB').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                    }
                    else if(DataRegUser.first_Name.value === 'Sayonaraom'){
                        db.collection('TeamName').doc('ชื่อไรดี').update({
                            firstKill: DataRegUser.F_nkill.value ,
                            secondKill: DataRegUser.S_nkill.value
                        })
                      }
                }
            )
      })
    }


    return(
        <ul id="fillOut">
            <li>
                <form id = 'pushData'>
                    <span>Rank 1</span>
                    <input name='first_Name' placeholder="Your name.."></input>
                    <input name='F_nkill' placeholder="First kill.."></input>
                    <input name='S_nkill' placeholder="Second kill.."></input>
                    <button onClick ={uploadDataPubg}>Submit</button>
                    </form>
            </li>
        </ul>
    );
}