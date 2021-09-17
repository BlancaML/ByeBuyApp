import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import itemsService from '../../../services/items-service';
import '../../items/item-detail/ItemDetail.css'
import backgroundImage from '../../../img/32.png';

import RentalForm from '../../rentals/rental-form';



function ItemPage() {

 const { id } = useParams();
 const [item, setItem] = useState(null);
 const [rental, setRental] = useState({ rentals: []})
 const [showForm, setShowForm] = useState(false)


 useEffect(() => {
     let isMounted = true;
     itemsService.detail(id)
        .then( item => {
                    
            if (isMounted) {
                setItem(item)
            }
        })
        return () => isMounted = false;
 },[id])
 

 const handleCreateRental = ((rental) => {
    setRental({ rentals: [rental, ...setRental]})
  }, [rental])


return item && (

    <>
         <div className="container-fluid pt-5" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '450px', margin: 'auto', paddingBottom:'80px'}}>
           <div className="py-5 container-fluid d-flex flex-row bd-highlight">
                <div className="py-5 bd-highlight">
                <div className="mt-3 row">
                     <div className="col-sm-12">
                     <div className="card bg-dark black-box">
                          <div className="card-body mb-2">
                              <div className="d-flex flex-row bd-highlight mb-1">
                              <h2 className="card-title text-white my-3">Check availability for this<br></br>
                               <span className="welcome-name"> {item.name}</span></h2>
                              </div>
                              <br></br>
                              <div className="">
                                  <Link to='/items' className="text-white">...Back to items</Link>
                              </div>
                          </div>
                     </div>
                     </div>
                </div>
                </div>
           </div>
      </div>
             <div className="container" style={{height:'450px'}}>
                 <div className="row mt-5">
                     <div className="col-xs-12 col-sm-4">
                         <img src={item.image} className="img-fluid" alt={item.name} />
                     </div>
                     <div className="col-xs-12 col-sm-8">
                         <h1>{ item.name }</h1>
                         <p>{ item.description }</p>
                         <p>💰 { item.cost }€ /day</p>
                         <p>Renter: { item.renter.name }</p>
                         <p>Contact info:{ item.renter.email }</p>
                         
                         <div className="d-flex flex-row bd-highlight mb-1">
                          <div className="p-2 bd-highlight">
                               <div className="d-flex flex-row">
                                    <div className="">
                                    <button 
                                        className="p-3 badge bg-dark text-white rounded-pill"
                                        onClick={() => setShowForm(true)}
                                    >Choose the date
                                    </button>
                                    </div >
                               </div>
                          </div> 
                        </div>
                     </div>
                 </div>
            </div>
            {showForm && 
            <div className="container-fluid" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '450px', margin: 'auto', paddingBottom:'80px'}}>
                <div className="d-flex row justify-content-center">
                    <div className="black-box col col-sm-8 col-md-6 col-lg-3 mt-5 bg-dark pb-5 m-2">
                            <div className="d-flex justify-content-center">
                                <div className="mt-3">
                                <RentalForm showTime {...rental} onCreateRental={handleCreateRental}/>
                                </div>
                            </div>
                            
                            
                                
                            
                    </div>  
                </div>
            </div>
            }
                 
                
                    
               
             
                
             </>

)

}


export default ItemPage;