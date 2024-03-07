import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from "./Components/Sidebar";
import Dashboard from './Pages/Dashboard';
import Profile from './Pages/Profile';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        
        <Route element={<WithSidebar />}>
          <Route index  element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function WithSidebar() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
