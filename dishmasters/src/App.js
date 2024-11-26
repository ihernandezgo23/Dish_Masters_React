import React, { useState } from 'react';
import './styles/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Menu_Icon from './Components/Menu_Icon';
import Sidebar from './Components/Sidebar';
import Sidebar_Desktop from './Components/Sidebar_Desktop';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import FormComponent from './Components/Form';
import Carousel from './Components/Carousel';
import Explore from './Components/Explore';
import Footer from './Components/Footer';

const App = () => {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        <Menu_Icon />
        {/* Sidebar Section */}
        <div className="col-12 col-md-3 col-lg-2">
          <Sidebar />
          <Sidebar_Desktop setShowForm={setShowForm} /> {/* Pass setShowForm as prop */}
        </div>

        {/* Main Content Section */}
        <div className="col-12 col-md-9 col-lg-10 py-3 d-flex flex-column align-items-center" id="main">
          <Header />
          <SearchBar />
          <Carousel />
          <Explore />
          <Footer />
        </div>
      </div>

      {/* Display Form Overlay */}
      {showForm && <FormComponent setShowForm={setShowForm} />} {/* Show form conditionally */}
    </div>
  );
};

export default App;
