import React from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import BeginButton from '../../BeginButton/BeginButton';
import './FrontPage.css';

function Front() {
    return(
        <>
        <Header />
        <div className="NonProfitBanner">
            <h3>The People's Purse is a nonprofit organization dedicated to collecting data to represent how you want to spend your tax dollars.</h3>
            <p>First we're going to quiz your knowledge on some basic vocabulary for today's lesson</p>
        </div>
        <br></br>
        <BeginButton />
        <Footer />
        </>
    )
}
export default Front;