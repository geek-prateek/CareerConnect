import React from 'react';
import './Widgets.css';
import FeedIcon from '@mui/icons-material/Feed';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Footer from './Footer';

function Widgets() {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets_article">
      <div className="widgets_articleLeft">
        <ArrowRightIcon/>
      </div>
      <div className="widgets_articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets_header">
        <h2>CareerConnect News</h2>
        <FeedIcon />
      </div>
    
      {newsArticle("CareerConnect News", "Your personalized tech application is now available")}
      {newsArticle("CareerConnect News", "Your personalized tech application is now available")}
      {newsArticle("CareerConnect News", "Your personalized tech application is now available")}
      {newsArticle("CareerConnect News", "Your personalized tech application is now available")}
      
      <a href="/"><div className="showbtn">
        <button type='show'>Show more </button>
        <KeyboardArrowDownIcon/>
      </div></a>
      
      <Footer />
      
    </div>
    
    
  )
}

export default Widgets