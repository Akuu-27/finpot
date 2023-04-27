import React from 'react';
import Navbar from './navbar';
import About from './about';
import Banner from './banner';
import Services from './services';
import Features from './features';
import './home.css';
import Testomonial from './testimonial';
import Footer from './footer';


function Home() {
    return (
        <div className="home">
               <Navbar/>
               {/* <div className="banner">
                <img src="./background1.jpg" alt="banner" />
               </div> */}
               <Banner/>
               <About/>
               <Features/>
               <Services/>
               <Testomonial/>
               <Footer/> 
               

        </div>

    );
}

export default Home;