import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Nav.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import CrimeInfo from "./CrimeInfo";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/" style={{color: "#F4DA21"}}><h3>Home</h3>  </Link>
        <Link to="/CrimeInfo"> Crime Info </Link>
        <Link to="/SignUp"> Sign Up </Link>
        <button className="buttonanalysis"><Link style={{color: "#030303", fontSize:20}}>Prediction</Link></button>
      </div>
    </div>
  );
}

export default Navbar;
