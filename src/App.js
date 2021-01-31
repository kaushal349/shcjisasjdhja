import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MainPage from './components/Home/MainPage';
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={MainPage} />
      </Switch>
    </Router>
  );
}

export default App;
