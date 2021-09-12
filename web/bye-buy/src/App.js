import { Switch, Route, Redirect } from 'react-router-dom';
// import ItemList from './components/contacts/contact-list/ItemList';
// import ItemDetails from './components/contacts/contact-details/ItemDetails';
import Header from './components/misc/Header';
import Footer from './components/misc/Footer';

import HomeLogout from './components/home/HomeLogout';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';


function App() {
  return (
    <>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
              <div>
                <Header/>
                <Route exact path="/" component={HomeLogout} />
          {/*<Route exact path="/" component={ItemList} />
          <Route exact path="/contacts/:id" component={ItemDetails} /> */}
              </div>
            </Switch>
            <Footer/>
    </>
  );
}

export default App;

