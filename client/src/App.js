import React from 'react';
import {
  BrowserRouter,
  Route,
  Redirect
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      Hello World
      <BrowserRouter>
        <Route path="/" component={Home}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
