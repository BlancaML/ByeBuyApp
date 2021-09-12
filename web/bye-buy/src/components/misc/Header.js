import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from 'react-router-dom';
import service from "../../services/users-service"
import logonavbar from '../../img/logo-black-no-tag.png'
import './Header.css';

function Header() {
  const history = useHistory()
  const auth = useContext(AuthContext)

  function handleLogout() {
    service.logout()
      .then(() => {
        auth.logout()
        history.push("/login")
      })
  }

  return (
    <nav className="navbar navbar-light bg-white shadow-navbar fixed-top mb-3">
      <div className="container-fluid">
        <img src={logonavbar} style={{maxWidth: "150px"}} className="img" alt="logo-Bye-Buy"/>
          <div className="flex-row">
            <span className="me-3">{auth.user?.name}</span>
            <img className="flex-row me-3 avatar-img"src={auth.user?.avatar}/>
        
            {!auth.user && (
              <div className="container-fluid d-flex flex-row bd-highlight">
                <div className="nav-link p-2 bd-highlight">
                <Link to='/sign-up' className="p-3 badge rounded-pill bg-dark">SIGN UP</Link>
                </div>
                <div className=" nav-link p-2 bd-highlight">
                <Link to='/login' className="p-3 badge rounded-pill bg-dark">LOGIN</Link>
                </div>
             </div>)}
      
            {auth.user && (
              <button onClick={handleLogout} className="p-3 me-3 badge rounded-pill bg-dark">Logout</button>
            )}
       </div>
      </div>
    </nav>
  )
}

export default Header

{/* <span className="me-3">{auth.user?.name}</span>, */}
            //   <img className="me-3 avatar-img"src={auth.user?.avatar}/>,