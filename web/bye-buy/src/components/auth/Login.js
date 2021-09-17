import { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import service from "../../services/users-service"
import bgLogin from '../../img/login_background.png';
import logofooter from '../../img/logo-white-tag.png';
import { useForm } from "react-hook-form";
import '../auth/Login.css';


function Login() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'all' });

  const onLoginFormSubmit = data => {
    service.login(data.email, data.password)
      .then(user => {
        auth.login(user)
        history.push('/')
      })
      .catch(error => {
        const { message, errors } = error.response?.data || error;
        if (errors) {
          Object.keys(errors).forEach(input => {
            setError(input, { type: 'manual', message: errors[input] });
          })
        } else {
          setError('email', { type: 'manual', message: message });
        }
      })
  };


  return (
    <div>
      <div className="container-fluid pt-5" style={{background: `url(${bgLogin})`, backgroundPosition: 'center', 
      backgroundRepeat: 'no-repeat', backgroundSize: 'cover', 
      height: '850px', margin: 'auto'}}>
        <div className="d-flex row justify-content-center">
          <div className="black-box col col-sm-8 col-md-6 col-lg-3 mt-5 bg-dark pb-5 m-2">
            <div className="text-center pt-2 text-white">
              <Link to='/'>
                <img src={logofooter} style={{maxWidth: "200px", position:"center"}} 
                className="img my-4" alt="logo-Bye-Buy"/>
              </Link>
            </div>
            <div className="d-grid gap-2 mb-2">
                <a href={`${process.env.REACT_APP_API_BASE_URL}/authenticate/google`} className="btn bg-app-bg mb-2 btn-white" id="google-register"><i class="fa fa-google me-2"></i>Login with Google</a>   
            </div>
            <p class="text-white small text-center">OR</p>
            
            <form onSubmit={handleSubmit(onLoginFormSubmit)}>
              <div className="input-group mb-2">
                <input
                  type="email" {...register("email", { required: 'Email is required' })}
                  placeholder="user@example.com"
                  className={`custom-form-control form-control input-border py-1 ps-4 ${errors.email ? 'is-invalid' : ''}`}/>
                {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
              </div>

              <div className="input-group mb-2">
                <input
                  type="password" {...register("password", { required: 'Password is required' })}
                  placeholder="password"
                  className={`custom-form-control form-control input-border py-1 ps-4 ${errors.password ? 'is-invalid' : ''}`}/>
                {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
              </div>

              <div className="d-grid gap-2 mb-2">
              <button type="submit" className="btn bg-app-bg mb-2 btn-white" disabled={Object.keys(errors).length !== 0}>Login</button>  
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

