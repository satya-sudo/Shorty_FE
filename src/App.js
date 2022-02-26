import './App.css';
import Registration from './pages/auth/registration';
import Nav from './nav';
import Home from './pages/home/home';
import Notfound from './pages/Notfound';
import Dashboard from './pages/dashboard/Dashboard';
import Docs from './pages/docs/docs';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Nav/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/registration" element={<Registration type={true} />} />
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/docs" element={<Docs />} />


            <Route path="*" element={<Notfound />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
