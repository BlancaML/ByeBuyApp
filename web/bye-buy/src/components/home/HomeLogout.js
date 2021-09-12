import '../home/Homelogout.css'
import backgroundImage from '../../img/33.png';
import buyee from '../../img/buyee.png';


function HomeLogout() {
 
    
     return(
     <>
          <div className="container-fluid pt-5" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '850px', margin: 'auto'}}>
               <div className="py-5 container-fluid d-flex flex-row bd-highlight">
                    <div className="py-5 bd-highlight">
                    <div className="mt-3 row">
                         <div className="col-sm-12">
                         <div className="card bg-dark black-box">
                              <div className="card-body">
                              <h1 className="card-title text-white my-3">WELCOME SHARING ECONOMY...</h1>
                              <br></br>
                              <br></br>
                              <div className="d-flex flex-row bd-highlight mb-3">
                              <div className="p-2 bd-highlight">
                                   <h2 className="card-text text-white animated">Rent
                                        <span> bikes</span>
                                        <span> drones</span>
                                        <span> tools</span>
                                        <span> cameras</span>
                                        <span> DJ sets</span>
                                        <span> anything</span>
                                        </h2>
                                   <h2 className="text-white animated"> from people in</h2>
                                   <h2 className="text-white animated"> your area</h2>
                                   </div>
                                   <img src={buyee} style={{maxWidth: "200px"}} className="img-buyee" alt="logo-Buyee"/>
                              </div>
                              </div>
                         </div>
                         </div>
                    </div>
                    </div>
               </div>
          </div>
     </>

         
     )
}



export default HomeLogout;

