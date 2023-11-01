import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {counter: 0, isEven: true}

  increment = () => {
    this.setState(obj => ({
      counter: obj.counter + Math.floor(Math.random(1) * 101),
    }))
    this.setState(obj => ({isEven: obj.counter % 2 === 0}))
  }

  render() {
    const {counter, isEven} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Count {counter}</h1>
          <p className="odd-even-message">Count is {isEven ? 'Even' : 'Odd'}</p>
          <div className="button-container">
            <button className="button" type="button" onClick={this.increment}>
              Increment
            </button>
          </div>
          <p className="guide-message">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
