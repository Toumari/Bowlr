import React, { Component } from 'react'
import PlayerScore from './PlayerScore'
import './Scoreboard.css';

export default class Scoreboard extends Component {
    calculateAverage = () => {
        
    }
  render() {
    return (
      <div className="mainBoard">
        <PlayerScore name="Jack"/>    
      </div>
    )
  } 
}
