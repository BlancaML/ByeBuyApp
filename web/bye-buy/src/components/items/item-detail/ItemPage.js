import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import itemsService from '../../../services/items-service';
import '../../items/item-detail/ItemDetail.css'
import backgroundImage from '../../../img/32.png';
import buyee from '../../../img/buyee.png';

class ItemPage extends Component {
    state = {
        item: {},
       
        
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        itemsService.detail(id)
            .then(
                item => this.setState({ item }),
                error => {
                    console.error(error);

                }
            )
    }

    render() {
        const { item } = this.state;
        return (
            <>
        <div className="container-fluid pt-5" style={{background: `url(${backgroundImage})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', height: '450px', margin: 'auto', paddingBottom:'80px;'}}>
          <div className="py-5 container-fluid d-flex flex-row bd-highlight">
               <div className="py-5 bd-highlight">
               <div className="mt-3 row">
                    <div className="col-sm-12">
                    <div className="card bg-dark black-box">
                         <div className="card-body mb-5">
                             <div className="d-flex flex-row bd-highlight mb-1">
                             <h2 className="card-title text-white my-3">Check availability for this<br></br>
                              <span className="welcome-name"> {item.name}</span></h2>
                             </div>
                         </div>
                    </div>
                    </div>
               </div>
               </div>
          </div>
     </div>
            <div className="container" style={{height:"600px"}}>
                <div className="row mt-5">
                    <div className="col-xs-12 col-sm-4">
                        <img src={item.image} className="img-fluid" alt={item.name} />
                    </div>
                    <div className="col-xs-12 col-sm-8">
                        <h1>{ item.name }</h1>
                        <p>{ item.description }</p>
                        <p>💰 { item.cost }/day</p>
                        <p>{ item.renter }</p>
                        {/* {items.map(item => <p>{ item.renter.name }</p>)}
                        {items.map(item => <p>{ item.renter.email }</p>)} */}
                        <div className="d-flex flex-row bd-highlight mb-3">
                         <div className="p-2 bd-highlight">
                              <div className="d-flex flex-row">
                                   <div className="p-2">
                                   <Link to='/items' className="mt-3 p-3 badge bg-dark text-white rounded-pill"><b>Choose your dates</b></Link>
                                   </div>
                              </div>
                         </div>
                              
                         </div>
                    </div>
                </div>
                <div className="row">
                    
                </div>
            </div>
                
            </>

        )
    }

}


export default ItemPage;