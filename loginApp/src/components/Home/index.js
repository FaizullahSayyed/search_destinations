import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  changeStatus = () => {
    console.log('3141')
    this.setState(obj => ({isLoggedIn: !obj.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="bg-container">
        <div className="inner-container">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClick={this.changeStatus} />
          ) : (
            <Login onClick={this.changeStatus} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
