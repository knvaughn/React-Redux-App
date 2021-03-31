import './App.css';
import Search from './components/search/Search';
import Definition from './components/definition/Definition';

function App() {
  return (
    <div className="App">
      <div className="left-pane">
        <Search />
        <Definition />
      </div>
      <div className="right-pane">
        <img src="owlbot.png" />
      </div>
    </div>
  );
}

export default App;
