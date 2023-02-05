/**
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
So let's start simple. I've found that always the best way when learning 
something is to start small and simple after learning about the topic. 
That way you get gain the familiarity and muscle memory as well as practice 
synthesizing the concepts and tasks in different scenarios. 


Okay so first of all let's start with a box that we float over the screen. 

So how do we go about creating this box floating on the screen. 

Well first of all we need a main container for the whole setup. 
This works like scene in Unity or 3JS. 

Once we have our main container then we can add the contents. 

first of all we want to add our main box. 

This box can be a section that will have elements nested within it. 

Now we create the navbar as a scene anchor. 


Okay so now we have the our box. It has dimensions and is within our main container. 

Now we just need to move it around using CSS. 

First of all we can use transform translate to move it along it's axies. 

We can use a check box to see if the button has been clicked or not. 

For the navbar and the hamburger icon and checkbox code we can use the previous versions 
of this component. 

Okay so first of all we'll need an input tag type="checkbox"> component. 

Then we'll need to add the code to see if it has been checked. 

As for moving the Hamburger bars and making one disappear that is practice for another time. 

Once we have the checkbox we need to position it correctly within the box. 


Now we have the checkbox we need to check if it has been checked or not. 















*/

import React from 'react'
import NewHamburgerCSS from '../Styles/NewHamburger.module.css'; 

function NewHamburger() {
  return (
    // Main container 
    <div className={NewHamburgerCSS.container}>
    {/* Create the navbar here  */}
    {/* You can you the previous code to do so  */}
    <input type={"checkbox"}/>
    <nav className={NewHamburgerCSS.navBar}> 
    {/* Add the nested elements for the contents of the navbar here  */}
    Will this work 
    {/* Place the checkbox here  */}
    
    
    </nav>
    {/* Add the box in here that way it is now in the navbar and is kept seperate */}
    <section className={NewHamburgerCSS.slideMenu}>
    {/*  */}
    Give this some content so it can show up 
    </section>
    
    
    
    </div>
    
  );
  
}

export default NewHamburger
