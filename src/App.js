import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Nav from "./components/nav";
import Home from "./components/";
var cloudinary = require('cloudinary').v2;

class App extends Component{
  state = {
sounds: []
  }
};

handleUpload = event => {
  event.preventDefault();
}

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/composer" component={composer} />
      </div>
     </Router> 
  );
};

render () {
  <Nav />

}
export default App;
