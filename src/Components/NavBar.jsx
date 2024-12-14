import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = ({ 
  selectedCountry, 
  onCountryChange 
}) => {
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');

    // Redirect to the login page after logout
    navigate('/login');
  };

  // Check if user is logged in by checking for the token in localStorage
  const isLoggedIn = !!localStorage.getItem('token');

  // Handle country change
  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    
    // Call the passed onCountryChange function to update the parent component's state
    onCountryChange(newCountry);

    // Optionally, you might want to persist the country selection
    localStorage.setItem('selectedCountry', newCountry);
  };

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/general">NewsNookNow</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/general">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">Technology</Link>
              </li>

              {/* Show Admin Dashboard link only if logged in */}
              {isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Admin Dashboard</Link>
                </li>
              )}
            </ul>

            {/* Country Selection Dropdown */}
            <div className="d-flex align-items-center">
              <select
                className="form-select"
                value={selectedCountry}
                onChange={handleCountryChange}
                style={{ width: 'auto', marginLeft: '20px' }}
              >
                <option value="us">United States</option>
                <option value="in">India</option>
                <option value="ca">Canada</option>
                <option value="gb">United Kingdom</option>
                <option value="au">Australia</option>
                <option value="de">Germany</option>
              </select>

              {/* Conditional Rendering of Login and Logout Buttons */}
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="btn btn-danger ms-3"
                >
                  Logout
                </button>
              ) : (
                <Link to="/Login" className="btn btn-primary ms-3">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;