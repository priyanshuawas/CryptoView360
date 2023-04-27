import classes from "./Additional.module.css";
import Crypto from "../assets/trading.png";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Additional = () => {
  return (
    <div className={classes.additional}>
      <div className={classes.container}>
        {/* left */}
        <div className={classes.left}>
          <img src={Crypto} alt="" />
        </div>

        {/* right */}
        <div className={classes.right}>
          <h2 style={{color: '#ff2e63'}}>Stay updated with the most important stories of the day.</h2>
          <p>
          Keep up with the latest trends and developments in the crypto world. Whether you’re a beginner or an expert, you'll find the information and insights you need on our website.
          </p>
          <div className="input-container">
        
            <Link className="btn" to="/articles" > Learn More</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Additional;
