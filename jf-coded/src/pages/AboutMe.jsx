import React, { Fragment, useState, useEffect } from 'react';
import Footer from '../components/Footer';
// import '../stylesheets/AboutMe.css';



function AboutMe() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <Fragment>
        <div>
            <h1>About Me</h1>
            <p>This page is under construction, coming soon...</p>
        </div>
        <Footer />
        </Fragment>

    );
}

export default AboutMe;
