const Logout = props => {
  const {onClick} = props

  return (
    <button type="button" className="button" onClick={onClick}>
      Logout
    </button>
  )
}

export default Logout
