
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import SellerDashboard from './components/Seller/SellerDashboard';

import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import DailyDeals from './components/Pages/DailyDeals';
import Home from './components/Home';
import Featured from './components/Pages/Featured';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const handleSearch = (query) => {
    // Perform search logic here (e.g., filter products, make an API call, etc.)
    // Update the search results state
    console.log("Searching for:", query);
  };
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/featured" element={<Featured />} />
          <Route path="/register" element={<Register />} />
          <Route path="/seller-dashboard" element={<SellerDashboard />} />
          
          <Route path="/" element={<Home />} />
          
      <Route path="/register" element={<Register />} />
      <Route path="/daily-deals" element={<DailyDeals />} />
      <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
