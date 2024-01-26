import React from "react";
import "./Clients.css";

import CdiLogo from "../../Assests/Images/CDI_Logo.jpg";
import MogasLogo from "../../Assests/Images/MogasLogo.jpg";
import SplitzerLogo from "../../Assests/Images/Logos-Spitzer.png";
import HpLogo from "../../Assests/Images/Hp_logo.jpeg";

const Clients = () => {
  return (
    <section className="ClientsSection">
      <div   className="container clientsHead ">
        <h2  id="012-ClientsSection" className="CHead text-center p-5 ">Our Clients</h2>
      </div>
      <div className="container ">
        <div className="row">
          <div className="d-flex col justify-content-around mx-5  ">
            <div className="Client col-4 px-5 m-4 text-center">
              <div className="d-flex row align-items-center justify-content-center">
                <img className="my-4" src={CdiLogo} />
                <h2 className="text-center">Cdi Products </h2>
              </div>
              <button type="button" className="btn btn-danger my-2 ">
                Read more
              </button>
            </div>

            <div className="Client col-4  px-5 m-4 text-center">
              <div className="d-flex row align-items-center justify-content-center">
                <img className="my-4" src={MogasLogo} />
                <h2 className="text-center">Mogas </h2>
              </div>

              <button type="button" className="btn btn-danger my-2 ">
                Read more
              </button>
            </div>
          </div>
          <div className="d-flex col justify-content-around  mx-5 ">
            <div className="Client col-4 px-5 m-4 text-center">
              <div className="d-flex row align-items-center justify-content-center">
                <img className="my-4" src={SplitzerLogo} />
                <h2 className="text-center">Spitzer Industries </h2>
              </div>
              <button type="button" className="btn btn-danger my-2 ">
                Read more
              </button>
            </div>
            <div className="Client col-4  px-5 m-4 text-center">
              <div className="d-flex row align-items-center justify-content-center">
                <img className="my-4" src={HpLogo} />
                <h2 className="text-center">Hindustan Petroleum </h2>
              </div>
              <button type="button" className="btn btn-danger my-2 ">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
