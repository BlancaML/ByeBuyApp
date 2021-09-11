import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
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
    <nav className="navbar navbar-light bg-white">
      <div className="container-fluid">
        <img src={logonavbar} style={{maxWidth: "150px"}} className="img" alt="logo-Bye-Buy"/>
        <div>
        <span className="me-3">{auth.user?.name}</span>
        <img className="me-3 avatar-img"src={auth.user?.avatar}/>

          {auth.user && (
            <button onClick={handleLogout} className="btn btn-danger btn-sm">Logout</button>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Header

{/* <span className="me-3">{auth.user?.name}</span>, */}
            //   <img className="me-3 avatar-img"src={auth.user?.avatar}/>,