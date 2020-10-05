import React from 'react';
import Header from './components/Header/Header'
import Store  from './components/Store/Store'
import Footer from './components/Footer/Footer'

import './App.css';

function App() {
  return (
    <div className="App">
        <Header />

        <Store age={24} name={'Darina'} />

        <Footer />
    </div>
  );
}

export default App;
