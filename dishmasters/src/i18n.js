import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          // HEADER
          "zubiri": "Zubiri's",
          "span": "#1 Trusted Recipe Site",
          "since": "since 1998",
          "original_recipes": "113K Original Recipes",
          "ratings_reviews": "6.9M+ Ratings & Reviews",
          "home_cooks": "60M Home Cooks",
          "language": "English",

          // SEARCH BAR
          "findPerfectDish": "Find your perfect dish...",
          "searchPlaceholder": "Search",

          // TITLE
          "discoverDishes": "Discover",
          "dishes": "DISHES",
          "discoverDishes2": "all around the World",

          // EXPLORE
          "explore": "EXPLORE",
          "globalFlavors": "Global Flavors: Popular Dishes",
          "healthyDeliciousRecipes": "Healthy & Delicious Recipes",
          "perfectPairings": "Perfect Pairings: Wine & Dishes",
          "seasonalIngredients": "Seasonal Ingredients for Every Dish",
          "quickEasyDinners": "Quick & Easy Weeknight Dinners",

          // MENUBAR
          "home": "Home",
          "my_feed": "My feed",
          "main_page": "Main Page",
          "dishy_challenge": "Dishy Challenge",
          "dishcuss": "DishCuss",
          "dishylist": "Dishylist",
          "taste_trends": "Taste Trends",
          "season_recipes": "Season Recipes",
          "food_spots": "Food Spots",
          "world_dishes": "World Dishes",
          "about_dishmasters": "About DishMasters",
          "about_us": "About Us",
          "contact_us": "Contact Us",
          "faq": "FAQ",
          "sign_in": "Sign In",
        }
      },
      eu: {
        translation: {
          // HEADER
          "zubiri": "Zubiriren",
          "span": "1. Errezeta Gune Fidagarria ",
          "since": "1998-tik",
          "original_recipes": "113K Jatorrizko Errezetak",
          "ratings_reviews": "6.9M+ Balorazio eta Iritziak",
          "home_cooks": "60M Sukaldari Etxekoak",
          "language": "Euskara",

          // BILAKETA
          "findPerfectDish": "Aurki itzazu zure plater gustukoena...",
          "searchPlaceholder": "Bilatu",

          // TITULOA
          "discoverDishes": "Ezagutu mundo osoko",
          "dishes": "PLATERAK ",
          "discoverDishes2": "",

          // EXPLORATU
          "explore": "EXPLORATU",
          "globalFlavors": "Zapore globalak: plater ezagunak",
          "healthyDeliciousRecipes": "Errezeta Osasungarri eta Gozoak",
          "perfectPairings": "Bikote ezin hobeak: ardoa eta platerak",
          "seasonalIngredients": "Plater bakoitzeko denboraldiko osagaiak",
          "quickEasyDinners": "Astebururako azkarrak eta errazak",

          // MENU BARRA
          "home": "Hasiera",
          "my_feed": "Nire feed-a",
          "main_page": "Orri Nagusia",
          "dishy_challenge": "Dishy Txapelketak",
          "dishcuss": "DishCuss",
          "dishylist": "Dishylist",
          "taste_trends": "Dastaketa Joera",
          "season_recipes": "Denboraldiko Errezetatik",
          "food_spots": "Janari Guneak",
          "world_dishes": "Munduko Platerak",
          "about_dishmasters": "DishMasters-i buruz",
          "about_us": "Guri buruz",
          "contact_us": "Harremanetan jarri",
          "faq": "Ohiko galderak",
          "sign_in": "Saioa hasi",
        }
      }
    },
    lng: 'en', // LEHENENGO HIZKUNTZA
    fallbackLng: 'eu', // BIGARREN HIZKUNTZA
  });

export default i18n;