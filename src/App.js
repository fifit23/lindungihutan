import React from 'react';
import Home from './Container/Home/Homee';
import Aboute from "./Container/Kampanye/Kampanye";
import Profile from "./Container/Profile/Profile";
import { BrowserRouter as Router,Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
         <Home />
        </Route>
        <Route path="/Kampanye">
          <Aboute />
        </Route>
        <Route path="/Profile">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}


export default App;