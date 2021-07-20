import './App.css';
import Login from '../src/components/Login/Login/Login'
import Home from '../src/components/Home/Home/Home'
import Shop from '../src/components/Shop/Shop/Shop';
import PrivateRoute from '../src/components/Login/PrivateRoute/PrivateRoute'
import NotFound from './NotFound'
import { createContext, useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AddProduct from './components/AddProduct/AddProduct';
import Shipment from './components/Shop/Shipment/Shipment';
import FancyCard from './components/Shop/Shipment/ProcessPayment/FancyCard/FancyCard';
import Appointment from './components/Appointment/Appointment/Apoointment';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddArtist from './components/AddArtist/AddArtist';
import AllClients from './components/AllClients/AllClients';

export const UserContext = createContext();

function App() {
 const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/shop">
            <Shop />
          </Route>
          <Route exact path="/appointment">
            <Appointment />
          </Route>
          <Route exact path="/fancy">
            <FancyCard />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <PrivateRoute exact path="/addproduct">
            <AddProduct />
          </PrivateRoute>
          <Route exact path="/addartist">
            <AddArtist />
          </Route>
          <PrivateRoute path="/allclients">
            <AllClients/>
          </PrivateRoute>
          <PrivateRoute exact path="/shipment">
            <Shipment />
          </PrivateRoute>
          <Route exact path="/*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
