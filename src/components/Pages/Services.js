import React from "react";
import "./Services.css";

import Operations from '../../Assests/Images/Operations.png';
import DataAnalytics from '../../Assests/Images/dataAnalytics.jpg';

const Services = () => {





  return (
    <section>
      <div className="container servicesHead">
        <h2  id="678-ServicesSection"  className="AHead text-center p-5">Our Services</h2>
      </div>
      <div className="container">
        <div className="row">
          <div className="serviceHeads pt-2 d-flex justify-content-around">
            <h3 className="ActiveserviceHeads col-3 text-center m-0 p-2">
              Operations
            </h3>
            <h3 className="col-3 text-center m-0 p-2">Procurement</h3>
            <h3 className="col-3 text-center m-0 p-2">Manufacturing</h3>
            <h3 className="col-3 text-center m-0 p-2">Engineering</h3>
          </div>
          <div className="d-flex justify-content-around align-items-center">
            <div className="my-4">
              <h4>what we can do for you in operations</h4>
              <ul>
                <li>Research</li>
                <li>Data Handling</li>
                <li>Data Visualization</li>
                <li>Estimating</li>
                <li>Costing</li>
                <li>Quality Control</li>
                <li>Forecasting</li>
              </ul>
            </div>
            <img className="OperationsImg" src={Operations}></img>
          </div>
        </div>
        <div className="row">
          <div className="serviceHeads pt-2 d-flex justify-content-around">
            <h3 className="ActiveserviceHeads col-3 text-center m-0 p-2">
              Data Analytics
            </h3>
            <h3 className="col-3 text-center m-0 p-2">Documentation</h3>
            <h3 className="col-3 text-center m-0 p-2">Data Science</h3>
            <h3 className="col-3 text-center m-0 p-2">SAP</h3>
          </div>
          <div className="d-flex justify-content-around align-items-center">
          <div className="my-4">
              <h4>what we can do for you in Data Analytics</h4>
              <ul>
                <li>Data Integration</li>
                <li>Data Modernization</li>
                <li>Oracle</li>
                <li>Data Science</li>
                <li>Data Visualization</li>
                <li>Cloud Data</li>
              </ul>
            </div>
            <img className="OperationsImg" src={DataAnalytics}></img>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
