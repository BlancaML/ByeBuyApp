import { useContext, useState } from "react"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import service from "../../services/users-service"
import bgLogin from '../../img/login_background.png';
import logofooter from '../../img/logo-white-tag.png';
import '../auth/Login.css';


function Login() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState()

  function handleChange(ev) {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    })
  }

  function handleSubmit(ev) {
    ev.preventDefault()

    service.login(data.email, data.password)
      .then((user) => {
        auth.login(user)
        history.push("/")
      })
      .catch(() => {
        setError("Ups! It's not valid")
      })
  }

  return (
    <div>
      <div className="container-fluid pt-5" style={{background: `url(${bgLogin})`, backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
      height: '850px', margin: 'auto'}}>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="d-flex row justify-content-center">
          <div className="black-box col col-sm-8 col-md-6 col-lg-3 mt-5 bg-dark pb-5 m-2">
            <div className="text-center pt-2 text-white">
              <Link to='/'>
                <img src={logofooter} style={{maxWidth: "200px", position:"center"}} 
                className="img my-4" alt="logo-Bye-Buy"/>
              </Link>
            </div>
            <div className="d-grid gap-2 mb-2">
                <a href="http://localhost:3001/api/authenticate/google" className="btn bg-app-bg mb-2 btn-white" id="google-register"><i class="fa fa-google me-2"></i>Login with Google</a>   
            </div>
            <p class="text-white small text-center">OR</p>
            
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-2">
                <input
                  name="email"
                  type="text"
                  placeholder="user@example.com"
                  onChange={handleChange}
                  value={data.email}
                  className="custom-form-control form-control input-border py-1 ps-4"
                />
              </div>
              <div className="input-group mb-2">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  onChange={handleChange}
                  value={data.password}
                  className="custom-form-control form-control input-border py-1 ps-4"
                />
              </div>
              <div className="d-grid gap-2 mb-2">
              <button type="submit" className="btn bg-app-bg mb-2 btn-white">Login</button>  
              </div>
              <div class="mb-3 mt-2">
                <p class="text-white small">New to Bye-Buy?<Link to="/sign-up" className="text-white"> Sign Up</Link></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

