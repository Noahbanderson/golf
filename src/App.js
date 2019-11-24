import React from 'react';
import { Switch, Route, } from 'react-router-dom';
import Start_game from './components/Start_game'
import NoMatch from './components/NoMatch'
// import { Container } from 'semantic-ui-react';
import { Game } from './components/Game'

function App() {
  return (
    <div style={{ height: "1000px" }}>
      <Switch>
        <Route exact path="/" component={Start_game} />
        <Route exact path="/game" component={Game} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  );
}

export default App;
