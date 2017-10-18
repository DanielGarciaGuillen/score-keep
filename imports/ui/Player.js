import React from 'react';
import {Players} from './../api/players';
import PropTypes from 'prop-types';


export default class Player extends React.Component{
    render(){
        return(
            <p key={this.props.player._id}>
            {this.props.player.name} has {this.props.player.score} points.
            <button onClick={()=> {
                Players.remove(this.props.player._id)
            }}>X</button> 
            <button onClick={()=> {
                Players.update(this.props.player._id,{ $inc: {score: +1}})
            }}>+1</button>
            <button onClick={()=>{
                Players.update(this.props.player._id, {$inc: {score: -1}})
            }}>-1</button>
            </p>
            );
    }
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
   
};