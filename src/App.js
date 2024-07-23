import logo from './logo.svg';
import './App.css';
import { Header } from "./component/header/Header.js";
import { Footer } from "./component/footer/Footer.js";
import { Page1 } from "./component/Page1";
import { Page2 } from "./component/Page2";
import { Page3 } from "./component/Page3";
import { BrowserRouter, Link, Switch, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
          <BrowserRouter>
              <div className="App">
                  {/* <Footer /> */}
              </div>
          </BrowserRouter>
          <Footer/>
      </header>
    </div>
  );
}

export default App;
