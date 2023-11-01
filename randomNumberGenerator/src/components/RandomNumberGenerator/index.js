import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {number: 0}

  generateRandomNumber = () => {
    this.setState({number: Math.floor(Math.random() * 101)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <div className="content-container">
            <h1 className="main-heading">Random Number</h1>
            <p className="paragraph">
              Generate a random number in the range of 0 to 100
            </p>
            <button
              type="button"
              className="button"
              onClick={this.generateRandomNumber}
            >
              Generate
            </button>
            <p className="number">{number}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
