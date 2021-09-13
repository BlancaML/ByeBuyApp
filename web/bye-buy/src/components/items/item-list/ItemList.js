import {useState, useEffect} from 'react'
import ItemDetail from '../item-detail/ItemDetail';
// import ItemForm from '../item-form/ItemForm';

import itemsService from '../../../services/items-service';

function ItemList () {
  const [items, setItems] = useState([])
  const [isLoading, setLoading] = useState(true)

  function fetchItems() {
    itemsService.list()
        .then(items => {
            setItems(items)
            setLoading(false)
        })
        .catch(error => {
            setLoading(false)
            console.error(error)
        })
}

useEffect(() => {
    fetchItems()
}, [])

function handleCreateItem(item) {
    setItems([item, ...items])
}


function handleDeleteItem(id) {
    itemsService.remove(id)
        .then(() => fetchItems());
        // .catch(error => console.error(error));

}

 return (

    items &&
    <>
      <div className="row mb-2">
        {/* <div className="col">
          <ItemForm onCreateItem={(item) => handleCreateItem(item)} />
        </div> */}
      </div>
      {isLoading ? (<i className="fa fa-gear fa-spin"></i>) : (
          <div className="container mt-5">
              <div className="d-flex row">
                  {items.map(item => (
                    <div className="col-4 mb-4"key={item.id}>
                        <ItemDetail {...item}  onDeleteItem={(id) => handleDeleteItem(id)}/>
                    </div>
                    ))}
              </div>
        </div>
      )}
    </>
  );

}



export default ItemList;