import React from 'react';
import Header from './components/Header/Header'
import Store  from './components/Store/Store'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />

        <Store />

        <Footer />
    </div>
  );
}

export default App;
