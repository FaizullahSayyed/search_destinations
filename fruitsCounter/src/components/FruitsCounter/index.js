import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  mangoIncrement = () => {
    this.setState(obj => ({mangoCount: obj.mangoCount + 1}))
  }

  bananaIncrement = () => {
    this.setState(obj => ({bananaCount: obj.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">
            Bob ate <span className="counter">{mangoCount}</span> mangoes
            <span className="counter"> {bananaCount}</span> bananas
          </h1>
          <div className="fruits-container">
            <div className="fruit-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="mango"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.mangoIncrement}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="fruit-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <div className="button-container">
                <button
                  type="button"
                  className="button"
                  onClick={this.bananaIncrement}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
