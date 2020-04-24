import React from "react";
import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <>
      <h2>About</h2>
      <p>This app uses React.</p>
      <Link to="/" className="btn btn-primary">
        Home
      </Link>
    </>
  );
};

export default AboutPage;
