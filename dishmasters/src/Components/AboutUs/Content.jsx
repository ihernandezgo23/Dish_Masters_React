import React from 'react';
            
function Content({}) {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
            <div className="d-flex flex-column">
                <div className="d-flex flex-column align-items-start">
                    <h2>DESCRIPTION</h2>
                    <p className='max-w-[50%] text-justify'>
                        Dishmasters is a recipe website where anyone can explore new dishes, find inspiration, or share their
                        own culinary creations. It features the most up-to-date database of dishes from around the world and
                        aims to be the ultimate destination for cooking enthusiasts.
                    </p>
                </div>
                <div className="d-flex flex-column align-items-end mt-4">
                    <h2>MAIN GOAL</h2>
                    <p className="max-w-[50%] text-justify">
                        Our objective with this project is to expand the culinary knowledge 
                        of the people, giving them access to various recipes all around the globe, and being able to upload their own,
                        with the huge amount of meals they will have at their disposal to learn. A group of them will surely get the 
                        attention of the users, and they will start liking to cook different types of dishes.
                    </p>
                </div>
            </div>  
            <img src="/img/Dishmasters timeline.png" alt="" />
        </div>
       
    );
}

export default Content;