import React from 'react'
import NewCardsCSS from '../Styles/NewCards.module.css'; 

function NewCards() {
  return (
    <div className={NewCards.container}>
      {/* So first of all we need the main container  */}
      {/* Add in the container for the first card here  */}
      <section className={NewCardsCSS.card}>
        {/* add in the title container here  */}
        <div className={NewCardsCSS.titleContainer}>
        <h1>Meet the Pastor </h1>

        </div>
        
        {/* Add in the image section here  */}
        {/* Add in the image container here  */}
        <div className={NewCardsCSs.imageContainer}>
        <div className={NewCardsCSS.image}></div>
        </div>
        
        {/* Add in the paragraph container here  */}
        <article className={NewCardsCSS.paragraphContainer}>
        <p className={NewCardsCSS.paragraph}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit temporibus necessitatibus cupiditate ratione commodi ea, impedit expedita rerum vitae maiores adipisci omnis, laborum perspiciatis sint reprehenderit fugiat harum voluptates.
        </p>
        </article> 
        

        {/* Add in the button container here */}
        <div className={NewCardsCSS.buttonContainer}>
            <button className={NewCardsCSS.button}>
                <a href="#" className={NewCardsCSS.buttonLink}>
                Learn More 
                </a>
            </button>
        </div>

      </section>
      
      
    </div>
  )
}

export default NewCards
