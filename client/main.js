import React from 'react';
import ReactDom from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';

import {Players} from './../imports/api/players';
import TitleBar from './../imports/ui/TitleBar';
import AddPlayer from './../imports/ui/AddPlayer';
import PlayerList from './../imports/ui/PlayerList';

Meteor.startup(()=>{
     Tracker.autorun(()=> {    
        let players = Players.find().fetch();
        let title = 'Score Keep';
        let jsx = (
        <div>
            <TitleBar title={title}/>            
            <PlayerList players={players}/>
            <AddPlayer/>            
        </div>
        );
        ReactDom.render(jsx, document.getElementById('app'));
     });
    
});