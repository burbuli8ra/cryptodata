import logo from 'assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          alt="CryptoData logo"
          className="CryptoData-logo"
          data-testid="logo"
          height={150}
          width={150}
          src={logo}
        />
        <p data-testid="greeting">
          Edit <code>src/App.js</code> and enjoy coding time! 🥂
        </p>
      </header>
    </div>
  );
}

export default App;
