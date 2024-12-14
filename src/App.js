import './App.css';
import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Components/Dashboard';
import Login from './Components/Login';  // Adjust the path as per your project structure
import Signup from './Components/Signup';


const App = () => {
  const apiKey = '82903259b9c84eedb59a9bc06d05786a';
  
  const [Progress, setProgress] = useState(0);
  const [selectedCountry, setSelectedCountry] = useState(
    localStorage.getItem('selectedCountry') || 'in'
  );

  // Function to handle country change
  const handleCountryChange = (newCountry) => {
    setSelectedCountry(newCountry);
  };

  return (
    <div>
      <Router>
        <LoadingBar
          height={3}
          color='#f11946'
          progress={Progress}
        />
        <NavBar selectedCountry={selectedCountry} onCountryChange={setSelectedCountry} />

        {/* Define Routes */}
        <Routes>
          <Route exact path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={5} country={selectedCountry} category="general" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={5} country={selectedCountry} category="business" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={5} country={selectedCountry} category="entertainment" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={5} country={selectedCountry} category="health" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={5} country={selectedCountry} category="science" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={5} country={selectedCountry} category="sports" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={5} country={selectedCountry} category="technology" />} />
          <Route path="/login" element={<Login />} />
          <Route exact path="/dashboard" element={<Dashboard />} />  {/* Add this line */}
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;