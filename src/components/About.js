import React from "react";

import img1 from "../assets/Yasiris.png";
import img2 from "../assets/Alix.png";
import img3 from "../assets/Jeffry.png";
import img4 from "../assets/Jonathan.png";
import img5 from "../assets/josue.png";
import img6 from "../assets/Aliaa.png";

function About(props) {
  return (
    <div id="about" className="about-container">
      <h2 className="section-sub-heading">About Us</h2>
      <p className="content">
        Feed the Bronx is a non-profit organization that provides free food to
        people in the Bronx. This is a web application available for both
        Desktop and Mobile devices. Our services are open to homelesses,
        students and low-income community.
      </p>
      <h2 className="section-sub-heading">Mission</h2>
      <p className="content">
        "Our mission is to feed people who are suffering from hunger by
        providing free food services.We end hunger and support the community"
        <h2 className="section-sub-heading">What make us different?</h2>
        <p className="content">
          Feed the Bronx provide access to different resources. We’re an
          organization that provides food directly to the starving people of the
          Bronx. Our app is creating a network of food pantries that will direct
          donors or individuals who really need the food to other food banks and
          food pantries.Our app allows the community to expand the reach of the
          app by allowing users to submit food banks and food pantries they know
          about.
        </p>
      </p>
      <div className="our-images">
        <div className="first">
          <div>
            <img className="us-img" src={img1} width="150px" height="150px"alt="" />
            <p className="center">Yasiris Ortiz</p>
          </div>

          <div>
            <img className="us-img" src={img2} width="150px" height="150px" alt="" />
            <p className="center">Alix Leon</p>
          </div>

          <div>
            <img className="us-img" src={img3} width="150px" height="150px" alt="" />
            <p className="center">Jeffrey Almanzar</p>
          </div>
        </div>

        <div className="second">
          <div>
            <img className="us-img" src={img4} width="150px" height="150px" alt="" />
            <p className="center">Jonathan Fabian</p>
          </div>

          <div>
            <img className="us-img" src={img5} width="150px" height="150px" alt="" />
            <p className="center">Josue Bueno</p>
          </div>

          <div>
            <img className="us-img" src={img6} width="150px" height="150px" alt="" />
            <p className="center">Aliaa Abdelrahman</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
