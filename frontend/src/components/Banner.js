import classes from "./Banner.module.css";
import Crypto from "../assets/allcoins.png";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.container}>
        {/* left side */}
        <div className={classes.left}>
          <p>Welcome to CryptoView360 </p>
          <h1>Track and Analyze Crypto Market with CryptoView360</h1>
          <p>Hundreds of Crypto Coins Await You: Don't Miss Out on the Opportunity</p>
          <div className={classes.input_container}>
            {/* <input type="email" placeholder="Enter your email" /> */}
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* right side */}
        <div className={classes.right}>
          <div className={classes.img_container}>
            <img src={Crypto} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
