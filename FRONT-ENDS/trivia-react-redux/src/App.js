import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchApiTriviaToken } from './services/apiRequest';
import Login from './pages/Login';
import Game from './pages/Game';
import Feedback from './pages/Feedback';
import Ranking from './pages/Ranking';
import Settings from './pages/Settings';

class App extends React.Component {
  componentDidMount() {
    fetchApiTriviaToken();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/play" component={Game} />
          <Route path="/feedback" component={Feedback} />
          <Route path="/ranking" component={Ranking} />
          <Route path="/settings" component={Settings} />
          <Route component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
