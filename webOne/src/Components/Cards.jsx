import React from 'react';
// Import the React hooks here 
import CardsCSS from '../Styles/Cards.module.css'; 

/** 
 * 
 
 
 */

function Cards() {
  return (
    <div className={CardsCSS.container}>
    {/* Add in the card container here  */}
    <section className={CardsCSS.card}> 
    <div className={CardsCSS.cardContainer}>
    
    
    {/* Add in the Card headline here  */}
    <div className={CardsCSS.title}> 
    <h1>
    Meet the pastor 
    </h1>
    </div>
    
    <div className={CardsCSS.mainImageContainer}>
    
    <div className={CardsCSS.imageContainer}>
      {/* Add in the image here for the Card  */}
      <img className={CardsCSS.imageTag}  src="https://images.pexels.com/photos/13894717/pexels-photo-13894717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
  
  
      </div>
    </div>
      {/* Add in the text paragraph here  */}
       <p className={CardsCSS.paragraph}>
       {/* Add in the text here  */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos provident, eos fugit velit tenetur assumenda culpa, cum atque qui voluptas possimus sit officiis animi doloremque magni hic vel repellendus.
      
      
       </p>
       
       {/* Add in the button here  */}
       <div className={CardsCSS.button}>
       <a href='#' alt="alt"> 
       Learn more 
       </a> 
       </div>
         
    </div>
      
    </section>
    {/* Add in the second card here  */}
    {/* SECOND CARD  */}
    <section className={CardsCSS.card}> 
    <div className={CardsCSS.cardContainer}>
    
    
    {/* Add in the Card headline here  */}
    <div className={CardsCSS.title}> 
    <h1>
    Meet the pastor 
    </h1>
    </div>
    
    <div className={CardsCSS.mainImageContainer}>
    
    <div className={CardsCSS.imageContainer}>
      {/* Add in the image here for the Card  */}
      <img className={CardsCSS.imageTag} src="https://images.pexels.com/photos/13894717/pexels-photo-13894717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
  
  
      </div>
    </div>
      {/* Add in the text paragraph here  */}
       <p className={CardsCSS.paragraph}>
       {/* Add in the text here  */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos provident, eos fugit velit tenetur assumenda culpa, cum atque qui voluptas possimus sit officiis animi doloremque magni hic vel repellendus.
      
      
       </p>
       
       {/* Add in the button here  */}
       <div className={CardsCSS.button}>
       <a href='#' alt="alt"> 
       Learn more 
       </a> 
       </div>
         
    </div>
      
    </section>
  
    
    {/* THIRD CARD HERE  */}
    <section className={CardsCSS.card}> 
    <div className={CardsCSS.cardContainer}>
    
    
    {/* Add in the Card headline here  */}
    <div className={CardsCSS.title}> 
    <h1>
    Meet the pastor 
    </h1>
    </div>
    
    <div className={CardsCSS.mainImageContainer}>
    
    <div className={CardsCSS.imageContainer}>
      {/* Add in the image here for the Card  */}
      <img className={CardsCSS.imageTag} src="https://images.pexels.com/photos/13894717/pexels-photo-13894717.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"/>
  
      </div>
    </div>
      {/* Add in the text paragraph here  */}
       <p className={CardsCSS.paragraph}>
       {/* Add in the text here  */}
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quos provident, eos fugit velit tenetur assumenda culpa, cum atque qui voluptas possimus sit officiis animi doloremque magni hic vel repellendus.
      
      
       </p>
       
       {/* Add in the button here  */}
       <div className={CardsCSS.button}>
       <a href='#' alt="alt"> 
       Learn more 
       </a> 
       </div>
         
    </div>
      
    </section>
 


    </div>
  )
}

export default Cards
