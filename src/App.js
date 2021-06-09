import logo from './logo.svg';
import NavBar from './components/NavBar'
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <NavBar/>
      </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Mi proyecto de Coder 😎
          </p>
        </body>
    </div>
  );
}

export default App;
