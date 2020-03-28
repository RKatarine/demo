import React from 'react';
import './App.css';
import Ticker from './components/Ticker/Ticker';

function App() {
  return (
    <div className="App">
      <Ticker price={700} pair="BTC/USD" buy={() => {
        console.log("1")
      }}/>
    </div>
  );
}

export default App;
