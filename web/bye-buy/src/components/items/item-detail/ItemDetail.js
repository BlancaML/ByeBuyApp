import { Link } from 'react-router-dom';
import './ItemDetail.css';

function ItemDetail({ id, name, description, cost, categories, image, location }) {
    return (
        <div className="mt-5">
            <div className="container">
                <div className="card-group mt-5">
                    <div className="card">
                        <Link to={`/items/${id}`}><img src={image} alt={name} className="card-img-top" /></Link>
                            <div className="card-body">
                                <h5 className="card-title">{name}</h5>
                                    {description && <h6 className="card-title">{description}</h6>}
                            </div>
                            <div class="card-footer">
                                    {cost && <small className="text-muted"><i className="fa fa-money-check-alt fa-fw me-1" />💰 {cost}/day </small>}
                            </div>
                                
                                

                                {/* add button to Rental Detail Component or create Rental */}
                            
                    </div>
                </div>
             </div>
        </div> 
    )
}

export default ItemDetail;