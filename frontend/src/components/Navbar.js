// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import { useState } from "react";
import "../index.css";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [faBars, setFaBars] = useState(false);
  const handleFaBars = () => {
    setFaBars(!faBars);
  };
  // const [currency, setCurrency] = useState("INR");
  return (
    <div className="header">
      <div className="container">
        <h1 style={{color: "black"}}>
          Crypto<span className="colors">View360</span>
        </h1>
        <ul className={faBars ? "nav_menu" : "nav_menu active"}>
          <li>
            <a href="/">Coins</a>
          </li>
          <li>
            <a href="/">Articles</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
          {/* <Select
            variant="outlined"
            value={currency}
            style={{
              width: 100,
              height: 40,
            }}
            onChange={(e) => setCurrency(e.target.value)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
          >
            <MenuItem value={"INR"} style={{ color: "#08D9D6" }}>
              INR
            </MenuItem>
            <MenuItem value={"USD"} style={{ color: "#08D9D6" }}>
              USD
            </MenuItem>
          </Select> */}
        </ul>
        <div className="hamburger" onClick={handleFaBars}>
          {faBars ? (
            <FaTimes size={20} style={{ color: "#333" }} />
          ) : (
            <FaBars size={20} style={{ color: "#333" }} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
