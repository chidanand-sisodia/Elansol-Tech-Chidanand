import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>

      </Routes>


    </Router>

  );
}

export default App;
