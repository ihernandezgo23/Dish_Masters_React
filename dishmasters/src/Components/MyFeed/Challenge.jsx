import React from 'react';
import './css/Challenge.css';

function Challenge() {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
            <h1 className="h5 h1-md">
                Dishy<i className="text-white"> Challenges </i>
            </h1>
            
            <div className="d-flex justify-content-center mt-10">
                <div className="text-center mx-3">
                    <a href="/season" className="image-hover">
                        <img src="/img/seasonRecipes/season.webp" alt="Season Recipes" className="img-fluid" />
                    </a>
                    <p className="mt-2">Special season Recipes</p>
                </div>
                <div className="text-center mx-3">
                    <a href="/weekly" className="image-hover">
                        <img src="/img/seasonRecipes/dishyC.webp" alt="Dishy C" className="img-fluid" />
                    </a>
                    <p className="mt-2">Weekly Dishy Challenges</p>
                </div>
            </div>

            <div className="space-y-4 w-full mt-12 overflow-y-auto">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                    <h2 className="font-medium">Rules and Participation</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                        <b>Eligibility</b>: Participants must be 18 years or older and legal residents of Spain. <br/>

                        <b>Registration</b>: To join the tournament, participants must fill out the registration form and submit a unique recipe. <br/>

                        <b>Selection Criteria</b>: Recipes will be judged based on originality, presentation, recipe explanation. Judges’ decisions are final. <br/>

                        <b>Disqualification</b>: Submissions with plagiarized content or those failing to meet the guidelines will be disqualified.
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                    <h2 className="font-medium">Data Protection</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    By participating, entrants <b>agree</b> to the collection and use of their <b>personal data  for the purpose of administering the contest.</b><br/>
                    Participants <b>must</b> sign a consent form allowing the organizer to store their data <b>securely</b> and <b>use their contact information for 
                    communication related to the contest.</b>
                    </p>
                </details>

                <details className="group [&_summary::-webkit-details-marker]:hidden">
                    <summary
                    className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4 text-gray-900"
                    >
                    <h2 className="font-medium">Prizes and Responsibilities</h2>

                    <svg
                        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                    </summary>

                    <p className="mt-4 px-4 leading-relaxed text-gray-700">
                    Soon.
                    </p>
                </details>

                <footer className="bg-body-secondary text-center w-100 mt-3">
                    <div className="container p-4 pb-0 col-8 d-flex justify-content-center">
                        <section className="mb-4 d-flex justify-content-around w-50">
                            <a className="btn text-white" style={{ backgroundColor: '#3b5998' }} href="#!">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#222222' }} href="#!">
                                <i className="bi bi-twitter-x"></i>
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#dd4b39' }} href="#!">
                                <i className="bi bi-google"></i>
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#ac2bac' }} href="#!">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#0082ca' }} href="#!">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a className="btn text-white" style={{ backgroundColor: '#444444' }} href="#!">
                                <i className="bi bi-github"></i>
                            </a>
                        </section>
                    </div>
                    <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        © 2025 Copyright:
                        <a className="text-body" href="/">DishMasters.com</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}

export default Challenge;