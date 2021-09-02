import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import "./about-page.scss"

export default function AboutPage(){
  return(
    <>
      <PageHeader titleText="About me" />

      <div className="body-style-3 container">
          <div className="container">
            <h2>I'm Sarah</h2>
            <p className="top-padding-container side-padding-container">A web developer and current DevMountain student living in Tempe, AZ. I spend my days skating, gaming, playing guitar, and learning how to make this site even better.</p>
            <p className="top-padding-container side-padding-container">I discovered the joy of buying random instant noodle packs from my local asian grocery store and wanted to make a site that I could review them on.</p>
          </div>
        </div>  

      {/* <div className="body-style-1 container">
        <div className="container">
          <h2 className="bottom-padding-container">Send a message</h2>

          <form action="/my-handling-form-page" method="post">
            <ul>
              <li>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="user_name" />
              </li>
              <li>
                <label htmlFor="mail">Email:</label>
                <input type="email" id="mail" name="user_email" />
              </li>
              <li>
                <label htmlFor="msg">Message:</label>
                <textarea id="msg" name="user_message"></textarea>
              </li>
              <li>
                <button type="submit">Send message</button>
              </li>
            </ul>
          </form>

        </div>
      </div>  */}

      <div className="body-style-1">
        <div className="container">
          <p className="top-padding-container">Feel free to connect with me on LinkedIn 
            <a href="https://www.linkedin.com/in/sarah-drew-dev/"> here.</a>
          </p>
          <button type="button">Source code</button>
        </div>
      </div>  

    </>
  );
}