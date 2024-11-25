import React from 'react';

const Explore = () => {
const exploreItems = [
{
    title: 'Global Flavors: Popular Dishes',
    imageSrc: 'img/foods/explore/burger.jpg',
    altText: 'Boat on Calm Water'
},
{
    title: 'Healthy & Delicious Recipes',
    imageSrc: 'img/foods/explore/healthy.jpg',
    altText: 'Waves at Sea'
},
{
    title: 'Perfect Pairings: Wine & Dishes',
    imageSrc: 'img/foods/explore/wine.jpg',
    altText: 'Mountains in the Clouds'
},
{
    title: 'Seasonal Ingredients for Every Dish',
    imageSrc: 'img/foods/explore/seasonal.jpg',
    altText: 'Boat on Calm Water'
},
{
    title: 'Quick & Easy Weeknight Dinners',
    imageSrc: 'img/foods/explore/quick.jpg',
    altText: 'Waves at Sea'
}
];

return (
<div className="row w-75 mt-5">
    <p className="h1">EXPLORE</p>

    {/* First Column */}
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {exploreItems.slice(0, 2).map((item, index) => (
            <div key={index} id="overlay" className='mb-4'>
            <p>{item.title}</p>
            <br />
            <img
                src={item.imageSrc}
                className="w-100 shadow-1-strong rounded"
                alt={item.altText}
            />
            </div>
        ))}
    </div>

    {/* Second Column */}
    <div className="col-lg-4 mb-4 mb-lg-0">
        <div id="overlay" >
            <p>{exploreItems[2].title}</p>
            <img
            src={exploreItems[2].imageSrc}
            className="w-100 shadow-1-strong rounded"
            alt={exploreItems[2].altText}
            />
        </div>
    </div>

    {/* Third Column */}
    <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
        {exploreItems.slice(3).map((item, index) => (
            <div key={index} id="overlay" className='mb-4'>
            <p>{item.title}</p>
            <br />
            <img
                src={item.imageSrc}
                className="w-100 shadow-1-strong rounded"
                alt={item.altText}
            />
            </div>
        ))}
    </div>
</div>
);
};

export default Explore;
