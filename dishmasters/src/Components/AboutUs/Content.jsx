import React from 'react';

function Content({}) {
    return (
        <div className="about-us container my-5">
            <div className="text-center mb-4">
            </div>

            <div className="d-flex flex-column flex-lg-row align-items-center mb-5">
                <div className="text-section mb-4 mb-lg-0 pr-lg-4">
                    <h2 className="font-weight-bold">Who We Are</h2>
                    <p className="text-justify pr-24">
                        <strong>Dishmasters</strong> is a recipe website where anyone can explore new dishes, find inspiration, or share their
                        own culinary creations. It features the most up-to-date database of dishes from around the world and
                        aims to be the ultimate destination for cooking enthusiasts.
                    </p>
                </div>
                <img
                    src="/img/HWA.webp"
                    alt="Who We Are"
                    className="img-fluid rounded shadow-lg w-100 w-lg-50"
                />
            </div>

            <div className="d-flex flex-column flex-lg-row-reverse align-items-center mb-5">
                <div className="text-section mb-4 mb-lg-0 pl-lg-4">
                    <h2 className="font-weight-bold text-right">Our Goals</h2>
                    <p className="text-right pl-24">
                        Our objective with this project is to expand the culinary knowledge of the people, giving them access
                        to various recipes all around the globe, and being able to upload their own, with the huge amount of
                        meals they will have at their disposal to learn. A group of them will surely get the attention of the
                        users, and they will start liking to cook different types of dishes.
                    </p>
                </div>
                <img
                    src="/img/OURM.webp"
                    alt="Our Mission"
                    className="img-fluid rounded shadow-lg w-100 w-lg-50"
                />
            </div>

            <div className="d-flex flex-column text-center my-5">
                <h2 className="font-weight-bold">Our Story</h2>
                <p className="text-center">
                Dishmasters was born last year as a POS (point of sale) software that was dedicated to small restaurants and hotels. <br/>
                This year we had the idea of reliving this project but with a new fresh look, and this is how <strong>Dishmasters</strong> came into being,
                 the new home cooks recipes website.
                </p>
            </div>

            <div className="d-flex flex-column text-center my-5">
                <h2 className="font-weight-bold pb-2">Where we are</h2>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3473.0225818479526!2d-1.9707470999999999!3d43.327370599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51a54183b87fed%3A0x6b3f34b4f0c14472!2sIES%20Xabier%20Zubiri%20Manteo%20BHI!5e1!3m2!1ses!2ses!4v1734425457627!5m2!1ses!2ses"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            <div className="testimonials-section text-center my-5">
                <h2 className="font-weight-bold">What Our Users Say</h2>
                <div className="my-4">
                    <blockquote className="blockquote">
                        <p>"Dishmasters has inspired me to try so many new recipes! The platform is easy to use and the community is so supportive."</p>
                        <footer className="blockquote-footer">Manel Lloranzadi, Home Cook</footer>
                    </blockquote>
                </div>
                <div className="my-4">
                    <blockquote className="blockquote">
                        <p>"I love how I can share my own recipes with others and get feedback. Dishmasters has truly become my go-to place for culinary inspiration!"</p>
                        <footer className="blockquote-footer">Xaguier Aguinagua, Food Blogger</footer>
                    </blockquote>
                </div>
            </div>


        </div>
    );
}

export default Content;