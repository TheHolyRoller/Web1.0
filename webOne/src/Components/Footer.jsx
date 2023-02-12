  import React from 'react'

import FooterCSS from '../Styles/Footer.module.css'; 
import ReactDOM from 'react-dom'

// import FaceBook from  '../assets/facebook'; 
import {FaTwitter} from "react-icons/fa";

import { MdFacebook } from 'react-icons/md'; 


// Example of how Linking is done 

/** 
import {
  Link
} from 'react-router-dom'

      <Link to='/link'>CLick</Link>
      
      // Another example 
      
      
      import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const App = () => {
  return (<Router>
            <Switch>
              <Route exact path='/' component={Bare}/>
              <Route path='/link' component={Bare1}/>
            </Switch>
          </Router>
          );
};



*/


  
  // How to use 
  
  /** 
  
  import React from 'react';
import ReactDOM from 'react-dom';
import { SocialIcon } from 'react-social-icons';
ReactDOM.render(<SocialIcon url="https://twitter.com/jaketrent" />, document.body);
  
  */
  
  

import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  PinterestIcon,
  PocketIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  ViberIcon,
  VKIcon,
  WeiboIcon,
  WhatsappIcon,
  WorkplaceIcon
} from "react-share";









// Bootstrap icons
/**
 * 
 * @returns 
 
 <i class="bi bi-instagram"></i>
 
 
 <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
</svg>


<i class="bi bi-facebook"></i>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
</svg>
 
 */



function Footer() {
  return (
  <footer className={FooterCSS.footer}> 
  {/* Put the contents container here */}
  <div className={FooterCSS.contentContainer}>
    {/* Put the first section here  */}
    
    {/* Section One  */}
    <article className={FooterCSS.section}>
    {/* Put the H1 Container here */}
    <div className={FooterCSS.headlineContainer}>
    {/* Put the H1 Tag here  */}
    <h1>Get Connected: </h1>
    
    </div>
    
    <section className={FooterCSS.listContainer}>
    <ul className={FooterCSS.list}>
    <li className={FooterCSS.listItem}>
    <a href='#' alt="alt"> 
    {/* Put the button text here  */}
    <strong> T:</strong>
    242341209430
    
    </a>
    </li>
    <li> 
    <a href='#' alt="alt"> 
    admin@email.com 
    </a>
    
    </li>
    
    <li className={FooterCSS.listItem}>
    <a href='#' alt="alt"> 
    contact@email.com
    
    </a>
    </li>
    
    </ul>
    </section>    
    </article>
    
  
    
    <article className={FooterCSS.section}> 
    
      
      <div className={FooterCSS.headlineContainer}> 
      <h1 className={FooterCSS.headline}>
      Location: 
      </h1>
      </div>
      
      <section className={FooterCSS.listContainer}>
      
      {/* Give these list items their own IDS  */}
      <ul className={FooterCSS.list}> 
      {/* Put the list items here  */}
      <li className={FooterCSS.listItem}> 
      
      <a href='#' alt="atl"> 
      31 Street 
      
      </a>
      </li>
      <li className={FooterCSS.listItem}> 
      <a href='#'>
        California Avenue
      </a>
      </li>
      </ul>

      </section>
    </article>
      
      
      
      {/* Put the third section in here  */}
      <article className={FooterCSS.section}> 
      {/* Put in the headline container here  */}
      <div className={FooterCSS.headlineContainer}> 
      
      <h1 className={FooterCSS.headline}>
      Outreach:
      </h1>
      </div>
      {/* Put the list container here  */}
      <section className={FooterCSS.section}> 
      {/* Put the list here  */}
      
      <ul className={FooterCSS.list}>
      <li className={FooterCSS.listItem}>
      <a href="#" alt="alt"> 
      Ministry to the Poor 
      </a>
      
      
      </li>
        <li className={FooterCSS.listItem}> 
        <a href='#' alt="alt">
          Volunteer 
          
        </a>
        </li>
        
        
        <li className={FooterCSS.listItem}>
          <a href="#" alt="atl">
            Kids Ministry 
          </a>
        </li>
        
        <li className={FooterCSS.listItem}>
          <a href="#" alt='alt'>
            Learn More 
          </a>
        </li>
        
      </ul>
      </section>
      </article>
  
  </div>
  
  {/* Put the social media section in here  */}
  <div className={FooterCSS.socialMediaSection}>
    <ul className={FooterCSS.socialMediaList}>
      <li> 
      <a href='#' alt="alt"> 
      {/* Add in the social media icon here  */}
      </a>
      </li>
      
      
      <li className={FooterCSS.socialMediaListItem}>
      <a href="#" alt="alt"> 
      {/* Add in the social media icon here  */}
      <i class="bi bi-instagram"></i>
      Facebook
      {/* <MdInstagram/> */}
      </a>
      </li>
      
      
      
      <li className={FooterCSS.socialMediaListItem}> 
        <a href='#' alt="alt">
        {/* find out why this is not working  */}
          Instagram
          {/* <FacebookIcon/> */}
          <MdFacebook className={FooterCSS.facebookIcon} />
          </a>
      </li>
      </ul>
      
  </div>
  </footer>
  );
}

export default Footer
