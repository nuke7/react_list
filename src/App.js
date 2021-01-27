import "./App.css";
import List from "./components/kismacska_List";
import Arr from "./components/data";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <List kismacska={Arr} />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
