// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import { MenuItem, Select } from "@material-ui/core";
import { useState } from "react";
import "../index.css";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { CryptoState } from "../CryptoContext";
import { Link } from "react-router-dom";
// import Home from "../home";
// import Middle from "../middle";
// import News from "../homePageComponents/News";
// import CoinPage from "../pages/coinPage";

const Navbar = () => {
  const [faBars, setFaBars] = useState(false);
  const handleFaBars = () => {
    setFaBars(!faBars);
  };
  const { currency, setCurrency } = CryptoState();
  // const [currency, setCurrency] = useState("INR");
  return (
    <div className="header">
      <div className="container">
        <h1>
          <Link to={"/"}>
            Crypto
            <span className="colors">View360</span>
          </Link>
        </h1>
        <ul className={faBars ? "nav_menu" : "nav_menu active"}>
          <li>
            <Link to="/homepage">Coins</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
          <li>
            <Link to="/">Contact Us</Link>
          </li>
          <li>
            <Link to="/">About Us</Link>
          </li>
          <Select
            variant="outlined"
            style={{
              color: "black",
              border: "1px solid black",
              width: 100,
              height: 40,
              marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
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
