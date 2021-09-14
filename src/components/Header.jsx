import React from "react";
import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <header>
      <h1>fun with triangles</h1>
      <nav>
        <Link to="/">Quiz</Link>
        <Link to="/istriangle">Is Triangle?</Link>
        <Link to="/hypo">Hypotenuse</Link>
        <Link to="/area">Area of Triangle</Link>
      </nav>
    </header>
  );
};
