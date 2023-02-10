import React from 'react';
// Import React hooks here 

// Import the Style sheet module here 
import PictureCSS from '../Styles/Picture.module.css'; 

/**
 * 
 * @returns 
 
 
 Okay so there are a few more components to finish until most of the work is finished for 
 most of the website. 
 There are a few more advanced features that would be nice to push but for the most part 
 the bare bones of the website will be done and finished. 
 
 Then you can move onto more CSS, HTML and React. Then you can move onto more advanced 
 frontend web development stuff like special effects and 3 Dimensional Graphic Rendering. 
 Once you really have this mastered you can then really start to add to your portfolio. 
 
 Once these are mastered and thoroughly learned and practiced then you can move onto 
 mid stack technologies like Next.js and Node.js as well as Redux and Express.js as well 
 as some backend technologies such as SQL and Websocket. 
 
 Once these have been mastered you can start using them to add to your portfolio and this 
 will help to really beef up your portfolio. 
 You will be able to build things like full stack chat applications as well as web sockets 
 APIs, API Wrappers, other similar web apps. 
 
 Now, I must focus and work with intensity and ensure that each concept is focused on with 
 laster intensity until it is fully learned and applied. Then you can keep up the momentum 
 to move onto the next concept. 
 
 So the plan for now is to create the hero image as well as the paragraph. 
 
 Once these are made and tested for responsiveness then you can move onto integrating 
 everything. Once everything is integrated then we can work on styling, hover effects, 
 special effects, and then polishing. 
 
 Once this has been done then we can do Routing and Linking as well as more thorough 
 testing. 
 

 
 */


function Picture() {
  return (
    <div className={PictureCSS.container}>
    
    {/* <img src='https://images.pexels.com/photos/14607314/pexels-photo-14607314.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' className={PictureCSS.image}/> */}
    
    
    {/* Add in the image container here  */}
    {/* Add in the image container here  */}
    <div className={PictureCSS.imageContainer}>
    
    
    <img src='https://images.pexels.com/photos/13949284/pexels-photo-13949284.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'/>
    
    
    <div className={PictureCSS.imageTextContainer}>
      
      <p className={PictureCSS.imageParagraph}>
      Here is some image Text 
      </p>
      <p className={PictureCSS.imageVerse}>  
      John 3:16

      </p>
      
    </div>

    
    </div>
    </div>
  );
}

export default Picture
