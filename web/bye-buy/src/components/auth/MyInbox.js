import { Link } from 'react-router-dom';
import inboxImg from '../../img/inbox.png';



function MyInbox() {
    
     return(
         <div className="d-flex row justify-content-center pt-5" >
            <div className="text-center pt-5 text-white">
            <img src={inboxImg} style={{maxWidth: "230px"}} className="img" alt="cry"/>
                <h2>No messages yet</h2>
                <h4>This is where you’ll find messages and notifications. As well as arrange pick-ups and drop-offs. Ready to get started?</h4>
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



export default MyInbox;