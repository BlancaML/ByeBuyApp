import { Link } from 'react-router-dom';
import backgroundImage from '../../img/33.png';

function HomeLogout() {
 
    
     return(
        <div className="" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '650px', margin: 'auto'}}>
             <div className="d-flex flex-row bd-highlight mb-3">
                <div className="p-2 bd-highlight">
                <Link to='/sign-up' className="p-3 mt-3 badge rounded-pill bg-dark">SIGN UP</Link>
                </div>
                <div className="p-2 bd-highlight">
                <Link to='/login' className="p-3 mt-3 badge rounded-pill bg-dark">LOGIN</Link>
                </div>
            </div>
      </div>
         
     )
}



export default HomeLogout;