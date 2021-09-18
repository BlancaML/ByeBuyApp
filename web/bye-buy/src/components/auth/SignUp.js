import { Link, useHistory } from "react-router-dom"
import { useForm } from "react-hook-form"
import service from "../../services/users-service"
import bgLogin from '../../img/login_background.png';
import logofooter from '../../img/logo-white-tag.png';

function SignUp() {

  const history = useHistory()

  const { register, handleSubmit, setError, formState: { errors } } = useForm({ mode: 'all' });
  
  const onRegisterFormSubmit = user => {
    service.createUser(user)
      .then(() => history.push("/login"))
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
              <form onSubmit={handleSubmit(onRegisterFormSubmit)}>
              

              <div className="input-group mb-2">
                    <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
                    <input type="text" {...register("name", { required: 'User name is required' })}
                      className={`custom-form-control form-control input-border py-1 ps-4 ${errors.name ? 'is-invalid' : ''}`} placeholder="Your Name" />
                    {errors.name && <div className="invalid-feedback">{errors.name.message}</div>}
              </div>

                <div className="input-group mb-2">
                  <span className="input-group-text"><i className="fa fa-envelope fa-fw"></i></span>
                  <input
                    type="email" {...register("email", { required: 'Email is required' })}
                    placeholder="user@example.com"
                    className={`custom-form-control form-control input-border py-1 ps-4 ${errors.email ? 'is-invalid' : ''}`}/>
                  {errors.email && <div className="invalid-feedback">{errors.email.message}</div>}
                </div>

                <div className="input-group mb-2">
                <span className="input-group-text"><i className="fa fa-user fa-fw"></i></span>
                  <input
                    type="password" {...register("password", { required: 'Password is required' })}
                    placeholder="password"
                    className={`custom-form-control form-control input-border py-1 ps-4 ${errors.password ? 'is-invalid' : ''}`}/>
                  {errors.password && <div className="invalid-feedback">{errors.password.message}</div>}
                </div>

                <div className="input-group mb-2">
                    <input type="file" {...register("avatar")}
                      className={`custom-form-control form-control input-border ${errors.avatar ? 'is-invalid' : ''}`} placeholder="John Doe" />
                    {errors.avatar && <div className="invalid-feedback">{errors.avatar.message}</div>}
                  </div>

                <div className="d-grid gap-2 mb-2">
                <button type="submit" className="btn bg-app-bg mb-2 btn-white" disabled={Object.keys(errors).length !== 0}>Sign Up</button>  
                </div>
              </form>
            </div>
          </div>
        </div>
   </div>
  )
}

export default SignUp



