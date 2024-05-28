import React from 'react';
import Main from './HomePage/Homepage';
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import Search from '@mui/icons-material/Search';
import Search from './Search/Search';
import MyBookings from './MyBookings/MyBookings';

function App() {
  return (
    <div className="App">
    
      <BrowserRouter>
      <Routes>


      <Route path='/' exact element={<Main />} />
                <Route path='/home' exact element={<Main />} />

                <Route path='/Search' element={<Search />}  />
                <Route path="my-bookings" element={<MyBookings />}  />

      </Routes>
      
      
      </BrowserRouter>
    </div>
  );
}

export default App;
