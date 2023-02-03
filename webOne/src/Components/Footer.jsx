  import React from 'react'

import FooterCSS from '../Styles/Footer.module.css'; 


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
    <h1>Get Connected </h1>
    
    </div>
    {/* Put the list container here  */}
    <section className={FooterCSS.listContainer}>
    
    <ul className={FooterCSS.list}>
    {/* Put the List items here  */}
    <li className={FooterCSS.listItem}>
    {/* Put the anchor tag here  */}
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
    
    
    {/* Put section two here  */}
    
    {/* Section Two  */}
    
    <article className={FooterCSS.section}> 
    {/* Add in a container here  */}
      {/* Repeat the same process as before  */}
      {/* Put the headline text container here */}
      <div className={FooterCSS.headlineContainer}> 
      <h1 className={FooterCSS.headline}>
      Location: 
      </h1>
      </div>
      
      {/* Put the list container here  */}
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
        California Avenu
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
      Outreach  
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
      <li className={FooterCSS.socialMediaItem}>
      <a href="#" alt="alt"> 
      {/* Add in the social media icon here  */}
      <i class="fa fa-facebook" aria-hidden="true"></i>
      Facebook
      </a>
      </li>
      
      
      <li> 
        <a href='#' alt="alt">
          <i class="fa fa-instagram" aria-hidden="true"></i>
          Instagram
        </a>
      </li>
      </ul>
  </div>
  
  </footer>
  );
}

export default Footer
