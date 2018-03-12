import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      counts: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0, h: 0, i: 0, j: 0, k: 0, l: 0, m: 0, n: 0, o: 0, p: 0, q: 0, r: 0, s: 0, t: 0, u: 0, v: 0, w: 0, x: 0, y: 0, z: 0 }
    }
  }

  countAlphabet(string){
    string.toLowerCase().split('').map((letter, index) => {
      if(this.state.counts.hasOwnProperty(letter)){
        this.setState({
          index: this.state.counts[letter]++
        })
      } else {
        this.setState({
          index: this.state.counts[letter] = 1
        });
      }
    })
  return this.state.counts
  }

  reset(){
    for(let letter in this.state.counts){
      if(!letter.match(/^[!@#\$%\^\&*\)\(+=._-]+$/g)){
        this.setState({
          letter: this.state.counts[letter] = 0,
          input: ""
        })
      } else {
        this.setState({
          letter: delete this.state.counts[letter]
        })
      }
    }
  }

  render() {
    const mappedLetters = Object.entries(this.state.counts).map(([letter, count], i) => {
      return <ul key={i}>
        <h4>{letter}</h4>
        <h4>{count}</h4>
      </ul>
    })
    return (
      <div className="App">
        <div className="inputBox">
          <input className="input" value={this.state.input} onChange={(e) => this.setState({input: e.target.value})}></input>
          <button className="submitButton" onClick={() => this.countAlphabet(this.state.input)}>Submit</button>
          <button className="resetButton" onClick={() => this.reset()}>Reset</button>
        </div>
        <div className='display'>{mappedLetters}</div>
      </div>
    );
  }
}

export default App;
