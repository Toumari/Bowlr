import React, { Component } from 'react'
import './PlayerScore.css';

export default class PlayerScore extends Component {
  state = {
    scores: [],
    score: 0,
  }

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const average = this.state.scores
    const arrSum = arr => arr.reduce((a,b) => a + b, 0) / arr.length
    const result = arrSum(average)
    this.setState({
      scores: [...this.state.scores, `${this.state.score} ` ],
      score: 0,
      avgScore: result
    })
  }

  render() {
    return (
      <div className="card">
      <h1>{this.props.name} {this.state.avgScore} </h1>
        <p>Previous Scores</p>
        <p>{this.state.scores}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="score">Score </label>
          <input type="text" value={this.state.score} name="score" onChange={this.handleChange} id="score"></input>
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
