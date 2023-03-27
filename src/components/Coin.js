const Change = ({ coin }) => {
  if (coin.changePercent24Hr[0] === "-") {
    return <p className="negative">{coin.changePercent24Hr.slice(0, 15)}</p>;
  } else {
    return <p className="positive">{coin.changePercent24Hr.slice(0, 15)}</p>;
  }
};

const Coin = ({ coin }) => {
  return (
    <div key={coin.id} class="card">
      <h2>{coin.name}</h2>
      <h3>${coin.priceUsd.slice(0, 10)}</h3>
      <div class="volume">
        <h4>volume</h4>
        <p>{coin.volumeUsd24Hr.slice(0, 15)}</p>
      </div>
      <div class="change">
        <h4>change</h4>
        <Change coin={coin} />
      </div>
    </div>
  );
};

export default Coin;
