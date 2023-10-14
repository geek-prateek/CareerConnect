import React from 'react';
import './Widgets.css';
import logo from "../Images/logo.png";
import twitter from "../Images/twitter.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AcUnitIcon from '@mui/icons-material/AcUnit';

function Footer() {
  return (
    <>
        <div className="widgets_bottom">
        <img src={logo} alt="logo" />
        <p><a href="">CareerConnect © Copyright 2023</a></p>
        <div className="widgets_items">
          <a href="/">About</a>
          <a href="/">Community</a>
          <a href="/">Contact Us</a>
        </div>
        <div className="widgets_items">
          <a href="/">FAQs</a>
          <a href='/'>Privacy Policy</a>
          <a href="">Get the app</a>
        </div>
        
        
        <p style={{marginLeft: "12px", fontWeight: "600"}}>Get in Touch :</p>
        <img src={twitter} alt="Twitter" style={{width: "70px", height:"30px"}}/>
        <LinkedInIcon style={{width: "70px", height:"30px"}} />
        <YouTubeIcon style={{width: "70px", height:"30px"}} />
        <AcUnitIcon style={{width: "70px", height:"30px"}} />
      </div>
    </>
  )
}

export default Footer