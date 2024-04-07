import logo from './logo.svg';
import './App.css';
import Registration from './components/Registration';
import { BrowserRouter as Router, Routes,Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import { AuthProvider } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Dashboard from './components/Dashboard';
import AppNavbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <AuthProvider>
            <Router>
              <AppNavbar />
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Registration />} />
                    {/* <Route path="/dashboard" element={<Dashboard />} /> */}
                    <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                    {/* Define other routes */}
                </Routes>
                <Footer />
            </Router>
        </AuthProvider>

  );
}

export default App;
