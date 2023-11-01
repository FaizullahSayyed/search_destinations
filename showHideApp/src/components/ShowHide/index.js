import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstNameShow: false, lastNameShow: false}

  hideShowFirstname = () => {
    this.setState(obj => ({firstNameShow: !obj.firstNameShow}))
  }

  hideShowLastname = () => {
    this.setState(obj => ({lastNameShow: !obj.lastNameShow}))
  }

  render() {
    const {firstNameShow, lastNameShow} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="main-heading">Show/Hide</h1>
          <div className="buttons-container">
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.hideShowFirstname}
              >
                Show/Hide Firstname
              </button>
              {firstNameShow ? <p className="name-container">Joe</p> : null}
            </div>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.hideShowLastname}
              >
                Show/Hide Lastname
              </button>
              {lastNameShow ? <p className="name-container">Jonas</p> : null}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
