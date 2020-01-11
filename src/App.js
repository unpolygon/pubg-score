import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import FillOut from './component/fill-out.component';
import ShowScore from './component/show-score.component';
import CreateTeam from './component/create-team.component';
import NavBar from './component/nav-bar.component';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Route path="/" exact component={FillOut} />
        <Route path="/Edit" component={ShowScore} />
        <Route path="/Create" component={CreateTeam} />
      </div>
    </Router>
  );
}

export default App;
