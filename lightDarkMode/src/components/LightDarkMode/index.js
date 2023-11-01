import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true, className: 'light-mode'}

  changeToLight = () => {
    this.setState({isDark: false, className: 'light-mode'})
  }

  changeToDark = () => {
    this.setState({isDark: true, className: 'dark-mode'})
  }

  render() {
    const {isDark, className} = this.state

    return (
      <div className="bg-container">
        {isDark && (
          <div className={`inner-container ${className}`}>
            <h1 className="main-heading">Click To Change Mode</h1>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.changeToLight}
              >
                Light Mode
              </button>
            </div>
          </div>
        )}
        {!isDark && (
          <div className="inner-container">
            <h1 className="main-heading">Click To Change Mode</h1>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.changeToDark}
              >
                Dark Mode
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
