import './index.css'

const Login = props => {
  const {onClick} = props
  return (
    <button type="button" className="button" onClick={onClick}>
      Login
    </button>
  )
}

export default Login
