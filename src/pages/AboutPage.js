import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import appu from "../assets/images/appu.jpeg";
import soniya from "../assets/images/soniya.jpeg";
import rushil from "../assets/images/rushil.jpeg";
function AboutPage(props) {
  return (
    <div>
      <Hero title={props.title} />

      <Content>
        <p>
          We build scalable, sustainable and secure applications for both web
          and mobile. We are one of the most prefered application development
          companies for businesses looking for web or app development. Our team
          is expert in web and mobile development with experience in building
          application with :<br />{" "}
          <b>JAVA (Android) PHP / LARAVEL SWIFT (IOS)</b>
        </p>

        <p>
          Along with the development we have an team experience in graphic
          designing. We provide our client with excellent graphic desgin
          including logo, banners etc.
        </p>
      </Content>
      <Content>
        <h1>Meet Our Team</h1>
        <ul className='aboutList'>
          <li>
            <div class='card'>
              <img src={soniya} class='card-img-top' alt='soniya' />
              <div class='card-body'>
                <p class='card-text'>
                  <h2>Miss Soniya</h2>
                </p>
                <p>CEO</p>
              </div>
            </div>
          </li>
          <li>
            <div class='card'>
              <img src={appu} class='card-img-top' alt='appu' />
              <div class='card-body'>
                <p class='card-text'>
                  <h2>Mr. Apurv</h2>
                </p>
                <p>CTO, Full-Stack Developer</p>
              </div>
            </div>
          </li>
           <li>
            <div class='card'>
              <img src={rushil} class='card-img-top' alt='appu' />
              <div class='card-body'>
                <p class='card-text'>
                  <h2>Mr. Rushil</h2>
                </p>
                <p>UI/UX Developer</p>
              </div>
            </div>
          </li> 
        </ul>
      </Content>
    </div>
  );
}

export default AboutPage;
