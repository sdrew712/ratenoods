import React from "react";
import PageHeader from "../PageHeader/PageHeader";

export default function ContactPage(){
  return(
    <>
      <PageHeader titleText="Contact me" />

      <div className="body-style-3 container">
          <div className="container">
            <h2>I'm Sarah</h2>
            <p className="p-padding-container">A web developer and current DevMountain student living in Tempe, AZ. I spend my days skating, gaming, playing guitar, and learning how to make this site even better.</p>
            <p>If you like my work or have any questions or comments, I’d be happy to hear from you!</p>
          </div>
        </div>  

      <div className="body-style-1 container">
        <div className="container">
          <h2 className="h2-padding-container">Send a message</h2>
        </div>
      </div> 

      <div className="body-style-3 container">
        <div className="container">
          <p className="p-padding-container">You can also connect with me on LinkedIn or email me at drew.sarah.e@gmail.com.</p>
        </div>
      </div>  

    </>
  );
}