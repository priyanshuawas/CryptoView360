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
          <h2 style={{color: '#ff2e63'}}>Earn passive income with crypto.</h2>
          <p>
            Earn up to 12% annual rewards on 30+ digital assets. Simply hold
            your assets in the app to automatically earn rewards at the end of
            each month with no lockups and no limits.
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
