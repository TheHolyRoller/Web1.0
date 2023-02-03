import React from 'react';
import HamburgerPrototypeCSS from '../Styles/HamburgerPrototype.module.css'; 

/** so let's just walk through the plan at the moment. It's been quite a late start so to spin up 
some momentum let's start on the footer and focus on getting the main structure of that done as 
making sure that it's completely responsive. 
Once the planing sketching and the html structure has been made then we can move onto styling 
and the whole thing responsive. 

Once the footer is responsive and the hamburger and other components have been made then we 
can move onto integrating the whole thing. 
There are a few issues with this that need to be properly dealt with. One such issue being 
the problem of collisions and overlapping of different components when the screen is reduced 
down to the certain width. 


This can partly be remedied by designing the mobile layout of the website first and can also be 
remedied by giving each composite component a class Name and creating a Grid layout within the 
App.css file. 

This way even though each composite component which is in turn made up of multiple components 
has it's own style sheet to organise and arrange the layout of it's structure to create a whole 
the end product with all of it's components must also be organised in the appropriate manner 
as well. 

So the plan for now is that I'm going to create the footer and then finnish off the 
Hamburger Menu. 

First of all let's focus on listing the individual components of the footer. 

First of all we have the main container. Which will be a footer tag. 

Then we have the contents container. This can be an div. 

Then we have a container for each section of the footer. 


This can be an article. 

We first need work out the structure of the first section and then we can repeat roughly the 
same structure for the rest of the sections within the footer. 

Now we need to list the components and containers within the first section of the footer. 

Well first of all we have the container for the section and we can contain this within an article. 
Next We have the headline for the section. This can be contained within a div with the appropriate 
class name. 

Next we have the headline itself and this can be contained within an h1 tag. 

After that we have the main body of the section's contents. These buttons which lead to different 
places within the website will be stored within an unordered list. 

We can store the unordered list within a section tag that will act as it's container. 

Next we have the list items that contain Links or Anchor Tags. The contents of the list elements 
can be stored within the anchor tags and the anchor tags can be stored within the list items. 


Once that has been done then we create the final buttons and info tags for the footer. 

And after that we are pretty much done with that section of the navbar. 

Then we move onto the next section of the navbar. 

We repeat the same process and then we move onto the CSS styling and organizing. 


*/


function HamburgerPrototype() {
  return (
    <nav role="navigation">
      <div className={HamburgerPrototypeCSS.menuToggle}>
 
        <input type="checkbox" />
       
        <span></span>
        <span></span>
        <span></span>
        
        
        <ul className={HamburgerPrototypeCSS.menu}>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Info</li></a>
          <a href="#"><li>Contact</li></a>
          <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
        </ul>
      </div>
    </nav>
  )
}

export default HamburgerPrototype
