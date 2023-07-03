import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserRegistration from './components/UserRegistration';
import AdminDashboard from './components/AdminDashboard';
import RaffleView from './components/RaffleView';
import PhotoView from './components/PhotoView';
import RemainingNumbersView from './components/RemainingNumbersView';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={UserRegistration} />
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/raffles" component={RaffleView} />
        <Route path="/photos" component={PhotoView} />
        <Route path="/remaining-numbers" component={RemainingNumbersView} />
      </Switch>
    </Router>
  );
}

export default App;