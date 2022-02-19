import React from 'react';
import Gallery from './components/gallery/Gallery'
import WalletSearch from './components/wallet-search/WalletSearch'

import './App.css';

function App() {




  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className ="main-content">
        <WalletSearch />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
