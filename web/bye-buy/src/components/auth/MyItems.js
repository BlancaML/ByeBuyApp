import { Link } from 'react-router-dom';
import itemImg from '../../img/my_items.png';



function MyItems() {
    
     return(
         <div className="d-flex row justify-content-center pt-5" >
            <div className="text-center pt-5 text-white">
            <img src={itemImg} style={{maxWidth: "230px"}} className="img" alt="my-items"/>
                <h2>Your store is empty</h2>
                <h4>Add a listing to start sharing and earning money.</h4>
                <div className="d-flex flex-row justify-content-center m-5" style={{height:"230px"}}>
                    <div className="p-3 mb-5">
                        <Link to='/' className="p-3 browse-item-link rounded-pill"><b>List an Item</b></Link>
                        </div>
                        <div className="p-3">
                        <Link to='/items' className="p-3 browse-item-link rounded-pill"><b>Browse items</b></Link>
                    </div>
                </div>
                </div>
            
        </div>
     )
}



export default MyItems;