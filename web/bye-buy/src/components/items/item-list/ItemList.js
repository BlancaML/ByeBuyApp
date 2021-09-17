import ItemDetail from '../item-detail/ItemDetail';


import {useEffect, useState } from 'react';
import itemsService from '../../../services/items-service';
import SearchBar from '../search/SearchBar';

function ItemList() {
  const [state, setState] = useState({ items: [], isLoading: true});

  const [search, setSearch] = useState('');

  const [currentCategory, setCurrentCategory] = useState();

  // const [fetch, handleFetch] = useState(false); // es un boolean , quiero que cambie de valor para que se ejecute el use effect. 


  // const fetchItems = useCallback(() => handleFetch(!fetch), [fetch]) // use callback hay que importarlo  desde arriba 


  useEffect(() => {
    let isMounted = true;
    itemsService.filterItem(search, currentCategory)
      .then(items => {
        if (isMounted) {
          setState({ items, isLoading: false});
        }
      })
      .catch(error => {
        if (isMounted) {
          setState({ isLoading:false });
        console.error(error);
        }
        
      }) 
      return () => isMounted = false
  }, [search, currentCategory])

  // [fetch, search, currentCategory])


  
  // const handleDeleteItem = useCallback((id) => {
  //   itemsService.remove(id)
  //     .then(() => fetchItems())
  //     .catch(error => console.error(error));
  // }, [fetchItems])


  // const handleCreateItem = useCallback((item) => {
  //   setState({ items: [item, ...state.items]})
  // }, [state])


// const getFilteredList = items =>
//     items.filter(item =>
//       item.name.toLowerCase().includes(setSearch.toLowerCase())
//     )

//   getResultList = () => getFilteredList()


  

  const { items, isLoading } = state;

  return (
    items && 
    <>
       
        {isLoading ? (<i className="fa fa-gear fa-spin"></i>) : (
            <div className="container mt-5">
              <SearchBar search={search} setSearch={setSearch} 
              categories={currentCategory} setCurrentCategory={setCurrentCategory}/> 
                <div className="d-flex row">
                    {items.map(item => (
                      <div className="col-4 mb-4"key={item.id}>
                          <ItemDetail {...item}/>
                      </div>
                      ))}
               </div>
            </div>
       )}
         


    </>
  )




}

// function ItemList () {
//   const [items, setItems] = useState([])
//   const [isLoading, setLoading] = useState(true)

//   function fetchItems() {
//     itemsService.list()
//         .then(items => {
//             setItems(items)
//             setLoading(false)
//         })
//         .catch(error => {
//             setLoading(false)
//             console.error(error)
//         })
// }

// useEffect(() => {
//     fetchItems()
// }, [])

// function handleCreateItem(item) {
//     setItems([item, ...items])
// }


// function handleDeleteItem(id) {
//     itemsService.remove(id)
//         .then(() => fetchItems());
//         // .catch(error => console.error(error));

// }

//  return (

//     items &&
//     <>
//       <div className="row mb-2">
//         {/* <div className="col">
//           <ItemForm onCreateItem={(item) => handleCreateItem(item)} />
//         </div> */}
//       </div>
//       {isLoading ? (<i className="fa fa-gear fa-spin"></i>) : (
//           <div className="container mt-5">
//               <div className="d-flex row">
//                   {items.map(item => (
//                     <div className="col-4 mb-4"key={item.id}>
//                         <ItemDetail {...item}  onDeleteItem={(id) => handleDeleteItem(id)}/>
//                     </div>
//                     ))}
//               </div>
//         </div>
//       )}
//     </>
//   );

// }



export default ItemList;