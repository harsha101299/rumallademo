import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";


const Footer = () => {
  return (
    <footer className="mainFooter text-light">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-4">
            <h3>Contact Info</h3>
            <ul className="footerLists p-0">
              <li className=" mt-3 mb-2">
                <FontAwesomeIcon icon={faMapLocationDot} className="me-4" />
                201, 2rd Floor, build name, maredpally, Secunderabad - 50023
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faPhone} className="me-4" />
                +91 900910156
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="me-4" />
                rumalla@rumallaconsulting.com
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Services</h3>
            <ul className="servicesFooterItems  footerLists p-0">
              <li className="mt-3 mb-2">
                <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Operations
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Procurement
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Manufacturing
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Engineering
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Data Analytics
              </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Documentation
              </li>
              
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                Data Science
              </li>
              
              <li className="mb-2">
              <FontAwesomeIcon icon={faChevronRight} className="me-4" />
                SAP
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>About Us</h3>
            <ul className="footerLists p-0">
              <li className=" mt-3 mb-2">
                Company About need to be written here
                Company About need to be written here
                Company About need to be written here
                Company About need to be written here 
              </li>
              
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
