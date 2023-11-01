import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {counter: 0}

  accelerate = () => {
    const {counter} = this.state
    if (counter < 200) {
      this.setState(() => ({counter: counter + 10}))
    }
  }

  break = () => {
    const {counter} = this.state
    console.log(counter)
    if (counter > 0) {
      this.setState(() => ({counter: counter - 10}))
    }
  }

  render() {
    const {counter} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading main-heading">SPEEDOMETER</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
        />
        <h1 className="heading">Speed is {counter}mph</h1>
        <p className="paragraph">Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button
            type="button"
            className="button accelerate"
            onClick={this.accelerate}
          >
            Accelerate
          </button>
          <button type="button" className="button break" onClick={this.break}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
