import React, { useState } from 'react';
import './styles/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Menu_Icon from './Components/mainPage/Menu_Icon';
import Sidebar from './Components/mainPage/Sidebar';
import Sidebar_Desktop from './Components/mainPage/Sidebar_Desktop';
import Header from './Components/mainPage/Header';
import SearchBar from './Components/mainPage/SearchBar';
import FormComponent from './Components/mainPage/Form';
import Carousel from './Components/mainPage/Carousel';
import Explore from './Components/mainPage/Explore';
import Footer from './Components/mainPage/Footer';
import './i18n';


const App = () => {
  const [showForm, setShowForm] = useState(false); // State to manage form visibility

  return (
    <div className="container-fluid">
      <div className="row flex-wrap">
        <Menu_Icon />
        {/* Sidebar Section */}
        <div className="col-12 col-md-3 col-lg-2" id='canvasMenu'>
          <Sidebar_Desktop setShowForm={setShowForm} /> {/* Pass setShowForm as prop */}
          <Sidebar setShowForm={setShowForm}/>
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
