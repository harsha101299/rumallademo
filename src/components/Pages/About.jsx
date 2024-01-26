import React from "react";
import "./About.css";
import AboutImg from "../../Assests/Images/about.png";
import AboutImg2 from "../../Assests/Images/about2.png";
import Countries from "../../Assests/Images/countries.png";

const About = () => {
  return (
    <section  id="937-AboutSection"  className="AboutSection">
      <div  className="container aboutUsHead">
        <h2 className="AHead text-center p-5">About us</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="d-flex col justify-content-around align-items-center my-5">
            <div className=" col-7">
              <p className="aboutText">
                Rumalla Consulting Services in India has a team of experts in
                Operations, Engineering, Purchasing, Procurement, Manufacturing
                etc, having years of experience. They have worked with clients
                from various industries and have a deep understanding of the
                challenges that businesses face in managing their operations.
                Their expertise enables them to provide customized solutions
                that meet the specific needs of each client. In addition,
                Rumalla Consulting Services in India stays up-to-date with the
                latest best practices and industry trends. <br></br>
                <br></br> This allows them to offer innovative solutions that
                can help businesses stay ahead of the competition. By leveraging
                their expertise, businesses can improve their operations and
                ensure 24X7 support is available with qualified resources at the
                lowest cost. Our core focus lies in providing rapid and
                efficient technology, process solutions and services which are
                required for the Domain and clients across the Globe.
              </p>
            </div>
            <div className="d-flex row col-4 justify-content-around align-items-center">
              <img
                className="imgs aboutSide my-5"
                src={AboutImg}
                alt="consultancy Firm"
              ></img>
              <img
                className="imgs aboutSide my-5"
                src={AboutImg2}
                alt="consultancy Firm"
              ></img>
            </div>
          </div>
        </div>
        <div className="countriesImg text-center">
          <img src={Countries} alt="sdfca"></img>
        </div>
        <h3 className="ms-5">We are located all over theese countries</h3>

      </div>
    </section>
  );
};

export default About;
