import React from 'react';

function Header({}) {
    return (
        <div className="container mt-5 d-flex flex-column justify-content-center align-items-center" id="main-heading">
            <h1 className="h5 h1-md">
                Frequently<i className="text-white"> ASKED </i> questions
            </h1>

            <p className='space-y-4 px-2 mx-auto max-w-5xl pt-12 text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime obcaecati ullam fugiat minus provident, eligendi voluptate 
                sequi tempora vitae maiores explicabo odio, vero quia numquam earum consequatur molestias non facilis.
            </p>
        </div>
    );
}

export default Header;