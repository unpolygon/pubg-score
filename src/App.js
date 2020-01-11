import React from 'react';
import { Link, BrowserRouter as Router, Route, Switch , HashRouter} from 'react-router-dom';
import './App.css';

import FillOut from './component/fill-out.component';
import ShowScore from './component/show-score.component';
import CreateTeam from './component/create-team.component';
import NavBar from './component/nav-bar.component';

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={FillOut} />
          <Route path="/Edit" component={ShowScore} />
          <Route path="/Create" component={CreateTeam} />
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
