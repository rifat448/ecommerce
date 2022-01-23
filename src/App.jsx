import logo from './logo.svg';
import './App.scss';
import Header from './component/header/Header';
import LandingPage from './component/landingPage/LandingPage';



import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <LandingPage menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
  );
}

export default App;
