import React from 'react';

import './styles/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // This includes Popper.js


import Sidebar from './Components/Sidebar';
import Sidebar_Desktop from './Components/Sidebar_Desktop';
import Header from './Components/Header';
import SearchBar from './Components/SearchBar';
import Carousel from './Components/Carousel';
import Explore from './Components/Explore';
import Footer from './Components/Footer';

const App = () => (
  <div className="container-fluid">
    <Sidebar />
    <Sidebar_Desktop />
    <div className="col py-3 d-flex align-items-center flex-column" id="main">
      <Header />
      <SearchBar />
      <Carousel />
      <Explore/>
      <Footer />
    </div>
  </div>
);

export default App;
