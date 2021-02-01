import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './App.css';
import MainPage from './components/Home/MainPage';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  return (
    <Router>
      <NavBar />
      <MainPage />
    </Router>
  );
}

export default App;
