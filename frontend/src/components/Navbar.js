// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
import { MenuItem, Select } from "@material-ui/core";
import { useEffect, useState } from "react";
import "../index.css";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { CryptoState } from "../CryptoContext";
import { Link } from "react-router-dom";
// import { UserApi } from "../config/UserApi";
// import Home from "../home";
// import Middle from "../middle";
// import News from "../homePageComponents/News";
// import CoinPage from "../pages/coinPage";

const Navbar = () => {
  const [faBars, setFaBars] = useState(false);
  const handleFaBars = () => {
    setFaBars(!faBars);
  };
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const { currency, setCurrency } = CryptoState();

  const getUserData = () => {
    if (user) {
      // window.open("http://localhost:8000/auth/logout", "_self");
      window.location.href = "http://localhost:8000/auth/logout";
      setUser(null);
      setUserName("");
    } else {
      // window.open("http://localhost:8000/auth/google");
      window.location.href = "http://localhost:8000/auth/google";
    }
    // UserApi.getUserData()
    //   .then(({ user }) => {
    //     console.log(user);
    //     setUserName(user.name);
    //   })
    //   .catch((err) => console.log(err));
  };

  useEffect(() => {
    const getUser = async () => {
      await fetch("http://localhost:8000/auth/login/success", {
        method: "GET",
        credentials: "include",
        header: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            return res.json();
          }
          throw new Error("authentication has been failed");
        })
        .then((resObject) => {
          setUser(resObject);
          setUserName(resObject.user.name);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getUser();
  }, []);

  console.log("ye data hai", user);
  console.log("ye name hai", userName);

  return (
    <div className="header">
      <div className="container">
        <h1>
          <Link to={"/"}>
            Crypto
            <span className="colors">View360</span>
          </Link>
        </h1>
        <div>{userName !== "" ? userName : ""}</div>
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
         <li> <div  onClick={getUserData} style={{ cursor: "pointer",
         'font-size': "1rem",
         'font-weight': "600",
         color: "white",
        }}>
            {user ? "logout" : "login"}
          </div>
          </li>
        <li>  <Select
            variant="outlined"
            style={{
              color: "white",
              border: "1px solid white",
              width: 100,
              height: 28,
              // marginRight: 15,
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"INR"}>INR</MenuItem>
          </Select>
          </li>
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
