import React from 'react';
import './App.css';
import Header from './components/Header';
import Menu2 from './components/Menu2';
import MoreContent from './components/MoreContent';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Menu2/>
        <MoreContent/>
        <Footer/>
    </div>
  );
}

export default App;
