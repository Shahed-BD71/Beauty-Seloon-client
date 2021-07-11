import logo from './logo.svg';
import './App.css';
import Login from '../src/components/Login/Login/Login'
import Home from '../src/components/Home/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
