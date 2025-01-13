import React from 'react';

function Header({}) {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
            <h1 className="h5 h1-md">
                Frequently<i className="text-white"> ASKED </i> questions
            </h1>

            <p className='space-y-4 px-2 mx-auto max-w-5xl pt-12 text-center'>
            Here, you'll find answers to common questions about Dishmasters, from how to explore recipes to sharing your own culinary creations. 
            If you need further assistance, feel free to contact us!
            </p>
            <p>Your can check for more detailed information in <a href="/about">about us</a></p>
        </div>
    );
}

export default Header;