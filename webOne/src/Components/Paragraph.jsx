import React from 'react';
import ParagraphCSS from '../Styles/Paragraph.module.css'; 
  
  

function Paragraph() {
  return (
    <div className={ParagraphCSS.container}>
    
    <div className={ParagraphCSS.paragraphContainer}> 
    
    <p className={ParagraphCSS.paragraph}>
    Fulfilling the Great Commission through fervent prayer, passionate worship and dedication to helping people fulfill their God-given destinies. 

    </p>

    </div>
      

    </div>
  );
}

export default Paragraph
