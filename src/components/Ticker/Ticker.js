import React from "react";
import PropTypes from "prop-types";
import styles from "./Ticker.module.css";

const Ticker = ({ price, pair, buy }) => {

  const [agreeGiven, setAgree] = React.useState(false);

  return (
    <div className={styles.ticker}>
      <h1>{pair}</h1>
      {!agreeGiven && (
        <label>
          <input type="checkbox" onChange={() => {
            setAgree(!agreeGiven)
          }}/>
          I agree
        </label>
      )}
      {price < 1000 &&
      agreeGiven && (
        <div>
          <button className="buyIndicator" onClick={buy}>
            buy
          </button>
        </div>
      )
      }
      <hr/>
      <h2>Price {price}</h2>
    </div>
  )
};

Ticker.propTypes={
  pair:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  buy:PropTypes.func,
};

Ticker.defaultProps = {
  buy: () => {
  }
};

export default Ticker;