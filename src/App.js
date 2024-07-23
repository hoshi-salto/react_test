import logo from './logo.svg';
import './App.css';
import { Header } from "./component/header/Header.js";
import { Footer } from "./component/footer/Footer.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <Footer/>
      </header>
    </div>
  );
}

export default App;
