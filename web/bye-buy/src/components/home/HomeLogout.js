import { useContext } from "react"
import { useHistory } from "react-router-dom"
import { AuthContext } from "../../contexts/AuthContext"
import '../home/Homelogout.css'
import backgroundImage from '../../img/33.png';
import buyee from '../../img/buyee.png';
import { Link } from 'react-router-dom';
import ItemForm from '../../components/items/item-form/ItemForm';
import { useCallback, useEffect, useState } from 'react';
import itemsService from '../../services/items-service';


function HomeLogout() {
     const history = useHistory()
     const auth = useContext(AuthContext)
     const [state, setState] = useState({ items: [], isLoading: true});
     const [fetch, handleFetch] = useState(false);
     const [showForm, setShowForm] = useState(false)

     const fetchItems = useCallback(() => handleFetch(!fetch), [fetch])

     const handleDeleteItem = useCallback((id) => {
          itemsService.remove(id)
            .then(() => fetchItems())
            .catch(error => console.error(error));
        }, [fetchItems])

     const handleCreateItem = useCallback((item) => {
          setState({ items: [item, ...state.items]})
        }, [state])
    
     return(
     <>
     {!auth.user && (
          <div className="container-fluid pt-5" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '850px', margin: 'auto'}}>
          <div className="py-5 container-fluid d-flex flex-row bd-highlight">
               <div className="py-5 bd-highlight">
               <div className="mt-3 row">
                    <div className="col-sm-12">
                    <div className="card bg-dark black-box">
                         <div className="card-body">
                         {/* <h1 className="card-title text-white my-3">WELCOME SHARING ECONOMY...</h1> */}
                         <br></br>
                         <div className="d-flex flex-row bd-highlight mb-3">
                         <div className="p-2 bd-highlight">
                              <h1 className="card-text text-white animated">Rent
                                   <span> bikes</span>
                                   <span> drones</span>
                                   <span> tools</span>
                                   <span> cameras</span>
                                   <span> DJ sets</span>
                                   <span> anything</span>
                                   </h1>
                              <h1 className="text-white animated"> from people in</h1>
                              <h1 className="text-white animated"> your area</h1>
                              </div>
                              <img src={buyee} style={{maxWidth: "280px"}} className="img-buyee" alt="logo-Buyee"/>
                         </div>
                         </div>
                    </div>
                    </div>
               </div>
               </div>
          </div>
     </div>
     )}
          {auth.user && (
          <div>
               <div className="container-fluid pt-5" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '850px', margin: 'auto'}}>
               <div className="py-5 container-fluid d-flex flex-row bd-highlight">
                    <div className="py-5 bd-highlight">
                    <div className="mt-3 row">
                         <div className="col-sm-12">
                         <div className="card bg-dark black-box">
                              <div className="card-body">
                              <h2 className="card-title text-white my-3">Hello, <span className="welcome-name">{auth.user?.name}</span></h2>
                              <br></br>
                              <div className="d-flex flex-row bd-highlight mb-3">
                              <div className="p-2 bd-highlight">
                                   <h3 className="text-white">Renting on Buy-Bye isn’t just convenient and cost effective. By buying less and renting more, you’re also contributing to a circular economy, making better use of resources and helping to protect this wonderful planet we live on.</h3>
                                   <div className="d-flex flex-row mt-5">
                                        <div className="">
                                        <button className="p-3 rounded-pill"
                                             onClick={() => setShowForm(true)}><b>List an item</b>
                                        </button>
                                        </div>
                                        <div className="p-3">
                                        <Link to='/items' className="p-3 browse-item-link rounded-pill"><b>Browse items</b></Link>
                                        </div>
                                   </div>
                              </div>
                                   <img src={buyee} style={{maxWidth: "220px"}} className="img-buyee" alt="logo-Buyee"/>
                              </div>
                              </div>
                         </div>
                         </div>
                    </div>
                    </div>
               </div>
               </div>
               <div className="row">
                    {showForm && 
                    <div className="col mb-2">
                    <ItemForm onCreateItem={handleCreateItem} />
                    </div>
                    }
                    
               </div>


     </div>
   
     )}
     </>

         
     )
}



export default HomeLogout;

