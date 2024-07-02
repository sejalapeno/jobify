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
            Job
            <span>
              {" "}
              <i>Tracking</i>{" "}
            </span>
            App
          </h1>
          <p>
            Welcome to Trackrr, your essential MERN stack job tracking app.
            Trackrr simplifies your job search with features like adding and
            updating job applications, personalized user profiles for efficient
            management, and insightful statistics to track your progress. Stay
            organized and focused on landing your next opportunity with Trackrr.
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
