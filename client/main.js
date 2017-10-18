import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import TitleBar from './../imports/ui/titlebar';
import AppPlayer from './../imports/ui/appplayer';


import {Players} from './../imports/api/players';

Tracker.autorun(function(){
    console.log('Players List',Players.find().fetch());
});




const renderPlayers = (playersList)=> {
    return playersList.map((player)=> {
        return(
            <p key={player._id}>
            {player.name} has {player.score} points.
            <button onClick={()=> {
                Players.remove(player._id)
            }}>X</button> 
            <button onClick={()=> {
                Players.update(player._id,{ $inc: {score: +1}})
            }}>+1</button>
            <button onClick={()=>{
                Players.update(player._id, {$inc: {score: -1}})
            }}>-1</button>
            </p>
            );
        });
};


const handleSubmit = (e)=>{
     let playerName = e.target.playerName.value;
    e.preventDefault();

    if(playerName){
        e.target.playerName.value = "";
        Players.insert({
            name: playerName,
            score: 0
        });
    }
};




Meteor.startup(()=>{
     Tracker.autorun(()=> {    
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let name = "Daniel";
        let jsx = (
        <div>
            <TitleBar/>
            
            {renderPlayers(players)}
            <AppPlayer/>
           
            <form onSubmit={handleSubmit}>
                <input type="text" name="playerName" placeholder="Player name"/>
                <button>Add player</button>
            </form>
        </div>
        );
        ReactDom.render(jsx, document.getElementById('app'));
     });
    
});