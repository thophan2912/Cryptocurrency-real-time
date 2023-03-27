import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Coin from "./components/Coin";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [timer, setTimer] = useState(null);
  const [isMounted, setIsMounted] = useState(false);

  async function updateCoin() {
    axios.get("https://api.coincap.io/v2/assets").then((response) => {
      let data = response.data.data;
      data = data.map((element) => {
        return {
          id: element.id,
          name: element.name,
          priceUsd: element.priceUsd,
          volumeUsd24Hr: element.volumeUsd24Hr,
          changePercent24Hr: element.changePercent24Hr,
        };
      });
      console.log(data);
      setCoins(coins.concat(data));
    });
    clearTimeout(timer);
    setTimer(setTimeout(updateCoin, 1000));
  }

  useEffect(() => {
    if (!isMounted) {
      updateCoin();
      setIsMounted(true);
    }
  }, []);

  return (
    <div>
      <h1>Cryptocurrency Realtime Price</h1>
      <div class="container">
        {coins.map((coin) => (
          <Coin key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default App;
