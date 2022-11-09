import React from 'react'
import { about, aboutleft, banerleft, banerright, bannerimage, bigblog, blogdec 
    , blogthumb, contactbg, contactdecoration, portfolio, service01, service02, 
    service03, service04, serviceleft } from '../Gambar/Zimage'

const Head = () => {
  return (
    <>
   
    <div id="js-preloader" className="js-preloader">
    <div className="preloader-inner">
      <span className="dot"></span>
      <div className="dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
 
 
  <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
           
            <a href="index.html" className="logo">
              <h4>Spac<span>Dyna</span></h4>
            </a>
          
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
              <li className="scroll-to-section"><a href="#about">About Us</a></li>
              <li className="scroll-to-section"><a href="#services">Services</a></li>
              <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
              <li className="scroll-to-section"><a href="#blog">Blog</a></li> 
              <li className="scroll-to-section"><a href="#contact">Message Us</a></li> 
              <li className="scroll-to-section"><div className="main-red-button"><a href="#contact">Contact Now</a></div></li> 
            </ul>        
            <a className='menu-trigger'>
                <span>Menu</span>
            </a>
        
          </nav>
        </div>
      </div>
    </div>
  </header>
    </>
  )
}

export default Head