import React  from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Admin from './Routes/Admin.jsx';
import Users from './Routes/Users.jsx'; 

export default function App() {
  return <div>
    <BrowserRouter>
          <Routes>
            <Route path = '/' element = {<Users/>}/>
            <Route path = '/admin' element = {<Admin/>}/>
          </Routes>
    </BrowserRouter>
  </div>
  
};

