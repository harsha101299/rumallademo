import React, { useEffect, useState } from "react";
import "./Home.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [glow, setGlow] = useState("sha");

  useEffect(() => {
    console.log(glow);
    setTimeout(() => {
      setGlow("");
    }, 100);
  });

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="234-HomeSection" className="Info">
      <div  className="infomain container">
        <div className="details">
          <span className={`span har ${"glow"}`} data-aos="fade-right">
            Rumalla Consulting Services PVT LTD
          </span>
          <span className={`span web ${"glow"}`}  data-aos="fade-left">
            Where Innovation Meets Execution
          </span>
        </div>
        <span>
          <p className="text-start">
            Dive into the world of strategic brilliance with us. Elevate your
            business , where expertise meets innovation, driving unparalled
            growth and strategic excellence
          </p>
        </span>
        <a className={"mailMe"} href="mailto:XXXXXXXXXXX@gmail.com">
          Mail me
        </a>
      </div>
    </section>
  );
};

export default Home;
