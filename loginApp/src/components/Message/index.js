import './index.css'

const Message = props => {
  const {isLoggedIn} = props
  return (
    <>
      {isLoggedIn && <h1 className="main-heading">Welcome User</h1>}
      {!isLoggedIn && <h1 className="main-heading">Please Login</h1>}
    </>
  )
}

export default Message
