import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import "./contact-page.scss"

export default function ContactPage(){
  return(
    <>
      <PageHeader titleText="Contact me" />

      <div className="body-style-3 container">
          <div className="container">
            <h2>I'm Sarah</h2>
            <p className="surround-padding-container">A web developer and current DevMountain student living in Tempe, AZ. I spend my days skating, gaming, playing guitar, and learning how to make this site even better.</p>
            <p>If you like my work or have any questions or comments, I’d be happy to hear from you!</p>
          </div>
        </div>  

      <div className="body-style-1 container">
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
      </div> 

      <div className="body-style-3">
        <div className="container">
          <p className="top-padding-container">You can also connect with me on LinkedIn or email me at drew.sarah.e@gmail.com.</p>
          <button type="button">Source code</button>
        </div>
      </div>  

    </>
  );
}