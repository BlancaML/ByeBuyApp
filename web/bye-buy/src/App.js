import { Switch, Route } from 'react-router-dom';
// import ItemList from './components/contacts/contact-list/ItemList';
// import ItemDetails from './components/contacts/contact-details/ItemDetails';
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';

import HomeLogout from './components/home/HomeLogout';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import ItemList from './components/items/item-list/ItemList';
import ItemPage from './components/items/item-detail/ItemPage';
import GoogleCallback from './components/auth/GoogleCallback';


function App() {
  return (
    <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/google/cb" component={GoogleCallback} />
              <div>
                <Header/>
                <Route exact path="/" component={HomeLogout} />
                <Route exact path="/items" component={ItemList}/>
                <Route exact path="/items/:id/rentals" component={ItemPage} /> 
              </div>
            </Switch>
            <Footer/>
    </>
  );
}

export default App;

