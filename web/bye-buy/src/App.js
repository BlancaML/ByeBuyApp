import { Switch, Route, Redirect } from 'react-router-dom';
// import ItemList from './components/contacts/contact-list/ItemList';
// import ItemDetails from './components/contacts/contact-details/ItemDetails';
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';

import HomeLogout from './components/home/HomeLogout';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import ItemList from './components/items/item-list/ItemList';
import ItemPage from './components/items/item-detail/ItemPage';


function App() {
  return (
    <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
              <div>
                <Header/>
                <Route exact path="/" component={HomeLogout} />
                <Route exact path="/items" component={ItemList}/>
                <Route exact path="/items/:id" component={ItemPage} /> 
              </div>
            </Switch>
            <Footer/>
    </>
  );
}

export default App;

