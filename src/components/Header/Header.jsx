import React from "react";
import "./Header.css";

import RumalaLogo from "../../Assests/Images/RumalaLogo.jpg";

function Header({onclick}) {
  function GotoHome() {
    let element = document.getElementById("234-HomeSection");
    let rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.y,
      left: rect.x,
      behavior: "smooth",
    });
  }

  function GotoAbout() {
    let element = document.getElementById("937-AboutSection");
    let rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.y,
      left: rect.x,
      behavior: "smooth",
    });
  }

  function GotoCLients() {
    let element = document.getElementById("012-ClientsSection");
    let rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.y,
      left: rect.x,
      behavior: "smooth",
    });
  }

  function GotoServices() {
    let element = document.getElementById("678-ServicesSection");
    let rect = element.getBoundingClientRect();
    window.scrollTo({
      top: rect.y,
      left: rect.x,
      behavior: "smooth",
    });
  }

  return (
    <header className="mainHeader sticky">
      <div className=" container dflex  px-3 py-0 nav">
        <div className="symBlock d-flex align-items-center justify-content-between py-0">
          <div className="otherSelect d-flex align-items-center">
            <img src={RumalaLogo} alt="Rummala Logo" />
          </div>
        </div>

        <div className="d-flex align-items-center">
          <ul className="headerItems nav justify-content-center align-items-center ms-5">
            <li className="nav-item d-flex align-items-center ">
              <h2
                className="nav-link headerItemsLink py-0"

                onClick={GotoHome}
              >
                Home
              </h2>
            </li>
            <li className="nav-item d-flex align-items-center ">
              <h2
                className="nav-link headerItemsLink py-0"

                onClick={GotoAbout}
              >
                About Us
              </h2>
            </li>{" "}
            <li className="nav-item d-flex align-items-center ">
              <h2
                className="nav-link headerItemsLink py-0"

                onClick={GotoCLients}
              >
                Our Clients
              </h2>
            </li>
            <li className="nav-item d-flex align-items-center ">
              <h2
                className="nav-link headerItemsLink py-0"
                onClick={GotoServices}
              >
                Our Services
              </h2>
            </li>{" "}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
