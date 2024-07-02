import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/girl.png";
import { Logo } from "../components";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span> Tracking </span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            vitae ratione error quod, sit nostrum assumenda beatae, possimus
            quae quo eius earum quibusdam porro ipsam et, necessitatibus autem
            explicabo voluptate.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
