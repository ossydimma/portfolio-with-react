import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-con">
          <div>
            <h2>
              I’m a web developer, based in Nigeria. Currently a freelancer. You
              can see my hobbies on @github.com and a photo on me too.
            </h2>
          </div>

          <div className="footerFlex">
            <div className="flexLeft">
              <h4>DROP A LINE</h4>
              <div className="input-con">
                <div>
                  <div>
                    {" "}
                    <input type="text" placeholder="Your Name" />
                  </div>
                  <div>
                    <input type="email" placeholder="Email" />
                  </div>
                  <div>
                    {" "}
                    <input type="text" placeholder="Subject" />
                  </div>
                  <div>
                    {" "}
                    <textarea
                      name="message"
                      id="message"
                      cols="0"
                      rows="0"
                      placeholder="Message"
                    ></textarea>
                  </div>
                </div>
                <div className="hire footerBtn">
                  <a href="/" className="hireBtn footerBtnn ">
                    Send message
                  </a>
                </div>
              </div>
            </div>
            <div className="flexRight">
              <h4>CONTACT ME</h4>
              <div>
                <ul>
                  <li>
                    <a href="/" style={{ color: "#150303" }}>
                      4657 Franklin Avenue, ARCH CAPE
                    </a>
                  </li>
                  <li>
                    <a href="/"></a>+361-883-3218
                  </li>
                  <li>
                    <a href="/"></a>hello@jac-co.com
                  </li>
                </ul>
                <div className="resume">
                  <a href="/" style={{ color: "#000" }}>
                    DOWNLOAD RESUME
                  </a>
                </div>
                <div className="icons" style={{ display: "flex" }}>
                  <div className="icon">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                  <div className="icon">
                    <i className="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footerEnd">
            <p>
              Copyright ©2023 All rights reserved | This template is made by
              <a
                href="https://github.com/ossydimma"
                style={{ color: "#000", padding: "5px" }}
              >
                @Dwater
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
