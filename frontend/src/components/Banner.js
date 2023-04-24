import classes from "./Banner.module.css";
import Crypto from "../assets/allcoins.png";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <div className={classes.container}>
        {/* left side */}
        <div className={classes.left}>
          <p>Buy & Sell Crypto 24/7 using your retirement account</p>
          <h1>Invest in Cryptocurreny with Your IRA</h1>
          <p>Buy, Sell, and store hundreds of cryptocurrencies</p>
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
