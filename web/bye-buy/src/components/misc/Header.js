import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import { Link } from 'react-router-dom';
import service from "../../services/users-service"
import logonavbar from '../../img/logo-black-no-tag.png'
import './Header.css';

function Header() {
  const history = useHistory()
  const { user, logout } = useContext(AuthContext)

  function handleLogout() {
    service.logout()
      .then(() => {
        logout()
        history.push("/login")
      })
  }

  return (
    <nav className="navbar navbar-light bg-white shadow-navbar fixed-top mb-3">
      <div className="container-fluid">
        <Link to='/'>
        <img src={logonavbar} style={{maxWidth: "150px"}} className="img" alt="logo-Bye-Buy"/>
        </Link>
          <div className="flex-row">
            
            {!user && (
              <div className="container-fluid d-flex flex-row bd-highlight">
                <div className="nav-link p-2 bd-highlight">
                <Link to='/sign-up' className="p-3 badge rounded-pill bg-dark">SIGN UP</Link>
                </div>
                <div className=" nav-link p-2 bd-highlight">
                <Link to='/login' className="p-3 badge rounded-pill bg-dark">LOGIN</Link>
                </div>
             </div>)}
      
            {user && (
              <>
                 
                 
                <li className="d-flex nav-item dropdown">
                 <a className="mt-2 nav-link dropdown-toggle text-dark" href="/profile" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   <span className="m-1 text-dark">{user.name}</span>
                 </a>
                 <img className="flex-row me-3 avatar-img" src={user.avatar} alt={user.name}/>
                 <button onClick={handleLogout} className="p-4 me-3 badge rounded-pill bg-dark"><b>Logout</b></button> 
                 <ul className="dropdown-menu m-1" aria-labelledby="navbarDropdown" style={{backgroundColor: "#09e7f7"}}>
                   <li><a className="dropdown-item" href="/inbox">Inbox</a></li>
                   <li><a className="dropdown-item" href="/my-rentals">Rentals</a></li>
                   <li><a className="dropdown-item" href="/my-items">My Items</a></li>
                 </ul>
                 </li>
                 
              </>
            )}
            
            
       </div>
      </div>
    </nav>
  )
}

export default Header





                




            

{/* <span className="me-3">{user.name}</span>
                <Link to="/profile">
                <img className="flex-row me-3 avatar-img" src={user.avatar} alt={user.name}/>
                </Link>
                <button onClick={handleLogout} className="p-3 me-3 badge rounded-pill bg-dark">Logout</button>  */}