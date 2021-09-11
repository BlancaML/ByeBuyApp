import { Switch, Route, Redirect } from 'react-router-dom';
// import ItemList from './components/contacts/contact-list/ItemList';
// import ItemDetails from './components/contacts/contact-details/ItemDetails';
import Header from './components/misc/Header';

import HomeLogout from './components/home/HomeLogout';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';


function App() {
  return (
    <>
      <Header/>

      <div className="container py-5">
        <Switch>
          <Route exact path="/" component={HomeLogout} />
          {/* <Route exact path="/" component={ItemList} />
          <Route exact path="/contacts/:id" component={ItemDetails} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />
          <Redirect to="/"/>
        </Switch>
      </div>
    </>
  );
}

export default App;

