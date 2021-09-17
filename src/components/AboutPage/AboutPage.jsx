import React from "react";
import PageHeader from "../PageHeader/PageHeader";
import "./about-page.scss";

export default function AboutPage() {
  return (
    <React.Fragment>
      <PageHeader titleText="About me" />

      <div className="body-style-2 container">
        <div className="container">
          <h2>I'm Sarah</h2>
          <p className="top-padding-container side-padding-container">
            A web developer and current DevMountain student living in Tempe, AZ.
            I spend my days skating, gaming, playing guitar, and learning how to
            make this site even better.
          </p>
          <p className="top-padding-container bottom-padding-container side-padding-container">
            I discovered the joy of buying random instant noodle packs from my
            local asian grocery store and wanted to make a site that I could
            review them on. Thus, Rate Noods was born.
          </p>
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
          <p className="top-padding-container side-padding-container">
            This site is not only a noodle rating site but also a way for me to
            experiment with React and learn to make a website on my own!
          </p>
          <a href="https://github.com/sdrew712/ratenoods.xyz">
            <button type="button">Source code</button>
          </a>
        </div>
      </div>
    </React.Fragment>
  );
}
