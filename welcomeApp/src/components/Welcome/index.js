import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {subscribe: false}

  changeToSubscribed = () => {
    this.setState(() => ({subscribe: true}))
  }

  changeToSubscribe = () => {
    this.setState(() => ({subscribe: false}))
  }

  render() {
    const {subscribe} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Welcome</h1>
          <p className="paragraph">Thank you! Happy learning</p>
          <div className="button-container">
            {!subscribe && (
              <button
                type="button"
                className="button"
                onClick={this.changeToSubscribed}
              >
                subscribe
              </button>
            )}
            {subscribe && (
              <button
                type="button"
                className="button"
                onClick={this.changeToSubscribe}
              >
                subscribed
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Welcome
