import React from 'react';
import NavbarCSS from '../Styles/Navbar.module.css'; 
// Import the react hooks here 
/** So basically the plan now is to create the navigation bar 
and ensure that is is fully responsive. 

So now that the basic navigation bar has been set up we need to go about making 
it responsive. 

To do this we need a hamburger dropdown menu. 
Now we have our media queries. So that's out of the way. Next what we need is to 
remove the Log and navbar buttons and then add in the hamburger menu. 

Once that is done we need to add in a new Logo into the center of the navbar. 

Then once the hamburger menu is added in we then have to add some event listeners to it. 

With that done we then need to construct the rollin menu for the Hamburger menu. 

This needs to be given a set height and width as well as the display type and 
layout. 

Once that has been done we then need to create the logic for it to roll in from the side. 

This can be done with event listeners and translating the component of the X and Y coordinates. 

Once that has been done we need to add the animation logic to translate the different hamburger 
bars along the X & Y coordinates. 

With that done we can then polish things up and then we have a responsive navbar. 

So just to recap. We first add in the htlm structure for the hamburger icon. Then seperately we 
add in the html structure for the slide in menu. 

Once that has been done we move onto the CSS styling and animations as well as typography. 

So just to recap what we are doing at the moment. 

First of all we need to create the Hamburger Menu. 
This entails creating the Hamburger bars to indicate where to click and that it is indeed a 
hamburger menu. 

This is usually done with three separate empty divs that are styled within the CSS stylesheet. 

Next we need to position these three bars for the hamburger icon. 

One could use font awesome for a hamburger Icon but it is not always reliable and is a lot of 
hassle to setup. 
This will have to be an option if the other methods don't work out. 

Now let's focus on what else needs to be done. First of all we need to create the HTML structure 
for the Slide in Menu. 

This can usually be done by creating a list that contains list items with nested anchor tags 
within them. Instead of anchor tags One could use Linking but that is for another time. 

Now once we have the basic html structure of the Hamburger bars we then need to move onto the 
html structure of the Slide in menu. First of all let's go through what are the different 
components of the Slide in Menu. 

First of all we have the container for the slide in menu. 

This will have to be given a set of fixed dimensions. 

Next we need to position this container and give it a background color. 

It will be sliding in from the side so we need to position it to the left hand side of the 
screen. We will also need to give it the appropriate z-index as well as positioning type. 

Depending on the positioning of the page we might have to remove the Slide in Menu from the 
DOM flow completely and place it with absolute positioning into a fixed position. 

This could also help with moving it in and out of view. 

If we set the overflow of the X coordinate of the page to hidden then if we move the Slide in 
until it is off the page with the transform: translateX() property then we can move the Slide 
in Menu off the page. 

Once we have the main Slide in Menu hovering to one side of the page then we can have it's 
default state be off the page to one side. 

This way we can have it's coordinates be placed off the page and only bring those coordinates 
back onto the page when the hamburger bars have been clicked 

Okay so that's the general idea of what needs to happen. 

So we have a main container for the Slide in Menu and next we have the items within the menu. 
or the list that will contain 
all the links within our Slide in Menu. 

With this container we can set the display type and layout of this container so we can place 
the entire list where we want within the container. 

So then once we have the container for the list then we can place the list into the container. 
Once that is done then we can place the list items into the list. 

These list items will have links or anchor tags nested within them along with their content. 

Then all we have to do is make sure that the list items are set to display block. 

This way they will be arranged in a vertical order. 
If we wanted them to be displayed in a horizontal alignment then we would set the list items to 
display inline. 

okay so let's get cracking with the HTML structure of the Slide in Hamburger Menu. 

It would be ideal to create the component separately then integrate the items that are relevant 
to the overall component. 

















*/

function Navbar() {
  return (
    <div className={NavbarCSS.container}>
    <nav className={NavbarCSS.navbar}>
    {/* Put the log here  */}
    <div className={NavbarCSS.logo}>
    <a href='#' alt="alt">
    Logo
    </a>
    </div>
    
    {/* Put the list container for the buttons here  */}
    <section className={NavbarCSS.listContainer}> 
    <ul className={NavbarCSS.list}>
    {/* Put the list items here  */}
    <li className={NavbarCSS.listItem}>
    <a href='#' alt="alt"> 
    About 
    </a>
    </li>
    
    <li className={NavbarCSS.listItem}>
    <a href='#' alt="alt">
    Weekly Meetings 
    </a>
    </li>
    
    <li className={NavbarCSS.listItem}>
    <a href="#" alt="alt"> 
    Live Sermons
    </a>
    </li>
    
    <li className={NavbarCSS.listItem}>
    <a href="#" alt="alt">
    Ministry
    </a>
    </li>
    
    
    <li className={NavbarCSS.listItem}>
    <a href='#' alt="alt"> 
    Outreach
    </a>
    </li>
    </ul>
    </section>
    
    
    
    </nav>
    {/* Create the hamburger menu here  */}
    <article className={NavbarCSS.hamburgerMenu}>
    {/* Put the Hamburger bars here */}
    <div className={NabarCSS.bar1}></div>
    
    <div className={NavbarCSS.bar2}></div>
    
    <div className={NavbarCSS.bar3}></div>
    
    {/* Put the slide in Menu here */}
    <span className={NavbarCSS.slideInMenu}>
    {/* Put the Hamburger slide in list here  */}
    <ul className={NavbarCSS.burgerList}>
    {/* Put the list items in here  */}
    <ul className={listItem}>
    
    
    </ul>
    
    </ul>
    
    </span>
    
    
    
    </article>
    
  
      
    </div>
  )
}

export default Navbar
