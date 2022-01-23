import logo from './logo.svg';
import './App.scss';
import Header from './component/header/Header';
import CategoryMenu from './component/categories/CategoryMenu';
import Banner from './component/banner/Banner';


import { useState } from 'react';

function App() {

  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <div className="App">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className={`content ${menuOpen ? "active" : ""}`}>
        <div className="leftContentBlock">
          <CategoryMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <div className="rightContentBlock">
          <Banner />
        </div>
      </div>
    </div>
  );
}

export default App;
