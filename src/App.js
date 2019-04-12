import React, { Component } from 'react';
import Ads from './components/Ads';
import './styles/index.css';
import './App.css';
import './Ads.js';

class App extends Component {
  componentDidMount () {
      const script = document.createElement("script");

      script.src = "https://tags.crwdcntrl.net/c/931/cc.js?ns=_cc931";
      script.type = "text/javascript";
      script.id="LOTCC_931"
      script.async = true;
      this.instance.appendChild(script);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">  
        <div ref={el => (this.instance = el)} />
          <p>
            Click on my Ads.
          </p>
        </header>
        <main className="main">
        <Ads />
        </main> 
      </div>
    );
  }
}

export default App;
