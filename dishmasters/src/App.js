import './styles/App.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';

// ALL
import Footer from './Components/FAQ/Footer';

// ABOUT US
import HeaderAbout from './Components/AboutUs/HeaderAbout';
import ContentAbout from './Components/AboutUs/Content';

// FAQ
import FAQ from './Components/FAQ/FAQ';
import Header2 from "./Components/FAQ/Header";

//RESTAURANTS
import HeaderRes from './Components/Restaurants/Header';
import Spots from './Components/Restaurants/spots';

// CHALLENGES
import Challenge from './Components/MyFeed/Challenge';
import SeasonRecipes from './Components/MyFeed/SeasonRecipes';
import WeeklyRecipes from './Components/MyFeed/WeeklyRecipes';
import MoreSeason from './Components/MyFeed/MoreInfoSeason';
import MoreWeek from './Components/MyFeed/MoreInfoWeek';

import AddChallenge from './Components/MyFeed/AddChallenge';

// TASTE TRENDS
import HeaderTrends from './Components/TasteTrends/HeaderTrends'
import ContentTrends from './Components/TasteTrends/ContentTrends';

// SEASON RECIPES
import HeaderSeason from './Components/SeasonRecipes/HeaderSeason'
import ContentRecipes from './Components/SeasonRecipes/ContentRecipes';

// WORLD DISHSES
import HeaderWorld from './Components/WorldDishes/HeaderWorld';
import ContentWorld from './Components/WorldDishes/ContentWord';

// USER PANEL
import Users from './Components/Users/Users';

// TRADUCTIONS
import './i18n';

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <Router>
      <Routes>

        <Route path="/" 
          element={
            <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
              <h1 className="h5 h1-md">
                  Dishmasters<i className="text-white"> CREATIONS </i>
              </h1>

              <a href="/about" className="image-hover">
                  about page
              </a>
              <a href="/faq" className="image-hover">
                  faq page
              </a>
              <a href="/restaurants" className="image-hover">
                  restaurants page
              </a>
              <a href="/challenges" className="image-hover">
                  challenges page
              </a>
              <a href="/tasteTrends" className="image-hover">
                  taste trends page
              </a>
              <a href="/seasonRecipes" className="image-hover">
                  season recipes page
              </a>
              <a href="/worldDishes" className="image-hover">
                  world dishes page
              </a>
              <a href="/users" className="image-hover">
                  user panel page
              </a>
            </div>
          }
        />

        <Route path="/worldDishes" 
          element={
            <div>
              <HeaderWorld />
              <ContentWorld />
              <Footer />
            </div>
          }
        />

        <Route path="/seasonRecipes" 
          element={
            <div>
              <HeaderSeason />
              <ContentRecipes />
              <Footer />
            </div>
          }
        />

        <Route path="/TasteTrends" 
          element={
            <div>
              <HeaderTrends />
              <ContentTrends />
              <Footer />
            </div>
          }
        />

        <Route path="/about" 
          element={
            <div>
              <HeaderAbout />
              <ContentAbout />
              <Footer />
            </div>
          }
        />

        <Route path="/restaurants" 
          element={
            <div>
              <HeaderRes />
              <Spots />
              <Footer />
            </div>
          }
        />        

        <Route path="/" element={<SeasonRecipes />} />
        <Route path="/add-challenge" element={<AddChallenge />} />

        <Route path="/challenges" 
          element={
            <div>
              <Challenge />
              <Footer />
            </div>
          }
        />
        <Route path="/season" element={<SeasonRecipes />} />
        <Route path="/weekly" element={<WeeklyRecipes />} />
        <Route path="/season/:challengeId" element={<MoreSeason />} />
        <Route path="/weekly/:challengeId" element={<MoreWeek />} />

        <Route path="/faq" element={
          <div>
            <Header2 />   
            <h1 className="space-y-4 px-2 mx-auto max-w-5xl pt-4">1. General information about Dishmasters</h1>
            <FAQ 
              title="Why Dishmasters?" 
              text="Dishmasters is a recipe website where anyone can explore new dishes, find inspiration, or share their
              own culinary creations. It features the most up-to-date database of dishes from around the world and
              aims to be the ultimate destination for cooking enthusiasts."
            />
            <FAQ 
              title="Who is behind Dishmasters?" 
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
              title="Where can we find more about Dishmasters"
              text={
                <>
                  Dishmasters is not a new project; it's an upgrade from an old personal project, which you can find at ‎ 
                  <a href="https://dishmaster.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                      https://dishmaster.vercel.app/
                  </a> or find more about us on our social networks.
                </>
              }
            />
            <hr className="mx-auto max-w-5xl text-black"></hr>

            <h1 className="space-y-4 px-2 mx-auto max-w-5xl pt-4">2. Account and Registration</h1>
            <FAQ 
              title="How can I create an account on Dishmasters?"
              text="On our website's main page, the sign-in button will redirect you to the login page, where on the top 
              you can see a link where you can create your account easily." 
            />
            <FAQ 
              title="Can I change my email address or account information?"
              text="The users cannot manually change their email account but can contact the support team by filling out 
              the form that you have on the menu on the main page, and a support team member will contact you soon." 
            />
            <hr className="mx-auto max-w-5xl text-black"></hr>

            <h1 className="space-y-4 px-2 mx-auto max-w-5xl pt-4">3. Challenges and Participation</h1>
            <FAQ 
              title="What DishyChallenge is and how can I participate?"
              text="Dishychallenge is a dedicated page to have fun with the community where users can take part in
              themed cooking or recipe daily challenges. It is an engaging way to connect with others, display
              skills, and enjoy having friendly competition." 
            />
            <FAQ 
              title="How do I upload a recipe for a challenge?"
              text="COMMING SOON..." 
            />
            <hr className="mx-auto max-w-5xl text-black"></hr>

            <h1 className="space-y-4 px-2 mx-auto max-w-5xl pt-4">4. Privacy and Security</h1>
            <FAQ 
              title="How do we protect personal information?"
              text="We take your privacy seriously and implement several security measures to protect your personal data. 
              This includes using encryption to safeguard your sensitive information, limiting access to authorized personnel,
              and regularly reviewing our security protocols to ensure compliance with industry standards." 
            />
            <FAQ 
              title="Can I delete my account and data?"
              text="Yes, you have the right to delete your account and all the associated data at any time. 
              Just contact our support team and tell them that you want to delete all your data, and they will provide further instructions." 
            />

            <Footer />
          </div>
        } />

        
        
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;