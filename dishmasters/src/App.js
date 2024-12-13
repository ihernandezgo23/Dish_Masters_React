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
import FAQ from './Components/AboutUs/FAQ';
import Header2 from "./Components/AboutUs/Header";
import Footer2 from './Components/AboutUs/Footer';

import './i18n';
import { Component } from 'react';


// const App = () => {
//   const [showForm, setShowForm] = useState(false); // State to manage form visibility

//   return (
//     <div className="container-fluid">
//       <div className="row flex-wrap">
//         <Menu_Icon />
//         {/* Sidebar Section */}
//         <div className="col-12 col-md-3 col-lg-2" id='canvasMenu'>
//           <Sidebar_Desktop setShowForm={setShowForm} /> {/* Pass setShowForm as prop */}
//           <Sidebar setShowForm={setShowForm} />
//         </div>

//         {/* Main Content Section */}
//         <div className="col-12 col-md-9 col-lg-10 py-3 d-flex flex-column align-items-center" id="main">
//           <Header />
//           <SearchBar />
//           <Carousel />
//           <Explore />
//           <Footer />
//         </div>
//       </div>

//       {/* Display Form Overlay */}
//       {showForm && <FormComponent setShowForm={setShowForm} />} {/* Show form conditionally */}
//     </div>
//   );
// };

const App = () => {
  return (
      <div>
        <Header2/>   

        <FAQ 
            title="Why Dishmasters?" 
            text="Dishmasters is a recipe website where anyone can explore new dishes, find inspiration, or share their
            own culinary creations. It features the most up-to-date database of dishes from around the world and
            aims to be the ultimate destination for cooking enthusiasts."
        />

        <FAQ 
            title="Why is Dishmasters special?"
            text="Users can explore their favorite meals, try them at home, and then rate and share their feedback. The
            platform also allows users to like posts and save their favorites, participate in exciting Dishy Challenges,
            and enjoy quick, one-minute short videos for bite-sized inspiration." 
        />

        <FAQ 
            title="Dishmasters team main goal"
            text="Our objective with this project is to expand the culinary knowledge of the people, giving them access
            to various recipes all around the globe, and being able to upload their own, with the huge amount of
            meals they will have at their disposal to learn. A group of them will surely get the attention of the
            users, and they will start liking to cook different types of dishes." 
        />

        <FAQ 
            title="Where we can find more about Dishmasters"
            text={
                <>
                    Dishmasters is not a new project; it's an upgrade from an old personal project, which you can find at ‎ 
                    <a href="https://dishmaster.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                        https://dishmaster.vercel.app/
                    </a> or find more about us on our social networks.
                </>
            }
        />

        
        <Footer2 />
      </div>
  );
}

export default App;