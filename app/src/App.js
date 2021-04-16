import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Search from './components/search/Search';
import Definition from './components/definition/Definition';

function App(props) {
  return (
    <div className="App">
      <div className="left-pane">
        <Search />
        {
          props.error &&
          <p className="error-message">{props.error}</p>
        }
        {
          props.word &&
          <Definition />
        }
      </div>
      <div className="right-pane">
        <img src="owlbot.png" alt="owl"  />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  word: state.word,
  error: state.error
});

export default connect(mapStateToProps, {})(App);