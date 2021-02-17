import React from "react";
import { Switch, Route } from "react-router-dom";

import MainPage from './main-page';
import Nav from './components/Nav'
import './App.css';

function App() {
  return (
    <div className="container">

      <Nav />

      <Switch>

        <Route exact path="/" component={(props) =>(<MainPage {...props} title="Bandas" entidad="bands" /> ) } />
          
        <Route path="/artistas" component={(props) =>(<MainPage {...props} title="Artistas" entidad="artists" /> ) } />

        <Route path="/bandas" component={(props) =>(<MainPage {...props} title="Bandas" entidad="bands" /> ) } />
          

      </Switch>

    </div>

  );

}

export default App;
