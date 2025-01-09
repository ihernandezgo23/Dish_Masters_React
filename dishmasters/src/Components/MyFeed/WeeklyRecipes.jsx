import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/season.css';

function SeasonRecipes() {
    const [recipes, setRecipes] = useState([]);
    const json = './json/weekly_challenge.json';

    useEffect(() => {
        // Load the JSON file
        fetch(json)
            .then((response) => {
                if (!response.ok) {
                    console.log('Error: file not loaded correctly: ' + response.statusText);
                } else {
                    console.log('JSON correctly loaded');
                    return response.json();
                }
            })
            .then((data) => {
                setRecipes(data); // Update the data
            })
    }, []);

    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
            <h1 className="h5 h1-md text-center">
                Weekly<i className="text-white"> Recipes </i> Challenges
            </h1>

            <div className="row pt-16 justify-content-center">
                {recipes.map((recipe, index) => (
                    <div className="col-md-6 col-lg-4 mb-4" key={index}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title">{recipe.title} <br />
                                    <button className={`btn btn-${recipe.color} mt-4`}>{recipe.status}</button>
                                </h5><hr/>
                                <p className="card-text text-justify">{recipe.description}</p>
                                <div className="deadline"><br />
                                    <strong>Start date:</strong> {recipe.start}<br/>
                                    <strong>End date:</strong> {recipe.deadline}
                                </div>
                                <img src={recipe.img} alt={recipe.title} className="img-fluid mx-auto d-block" />
                                <Link to={`/weekly/${recipe.id}`}>
                                    <button type="button" className="mt-2 text-black bg-#FFBD59 bg-dishColor focus:outline focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">
                                        More info
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SeasonRecipes;