import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from './pages/Dashboard';
import Header from './components/Header';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <>
      <Router>
        <div className= 'container'>
          <Header />
          <Routes>
            <Route path = '/' element = {<DashBoard />} />
            <Route path = '/login' element = {<Login />} />
            <Route path = '/register' element = {<Register />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
