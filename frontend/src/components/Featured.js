import classes from "./Featured.module.css";
import { FiArrowUpRight, FiArrowDown } from "react-icons/fi";
import { useEffect, useState } from "react";
import axios from "axios";

const Featured = () => {
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false&locale=en";
  const [coins, setCoins] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, []);
  if (!coins) return null;

  return (
    <div className={classes.featured}>
      <div className={classes.container}>
        {/* left side */}
        <div className={classes.left}>
          <h2>Explore top Crypto's Like Bitcoin, Ethereum, and Dogecoin</h2>
          <p>See all available assets: Cryptocurrencies and NFT's</p>
          <button className="btn">See More Coins</button>
        </div>

        {/* right side */}
        <div className={classes.right}>
          {coins.map((coin) => {
            return (
              <div className={classes.card} key={coin.market_cap_rank}>
                <div className={classes.top}>
                  {/* <img src={BTC} alt='/' /> */}
                  <img src={coin.image} alt="" />
                </div>
                <div>
                  <h5>{coin.name}</h5>
                  <p>${coin.current_price.toLocaleString()}</p>
                </div>

                {coin.price_change_percentage_24h < 0 ? (
                  <span className={classes.red}>
                    <FiArrowDown className={classes.icon} />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                ) : (
                  <span className={classes.green}>
                    <FiArrowUpRight className={classes.icon} />
                    {coin.price_change_percentage_24h.toFixed(2)}%
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Featured;
