import React from 'react';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import SearchByRecruiter from './components/SearchByRecruiter';
import SearchByCompany from './components/SearchByCompany';
import RateARecruiter from './components/RateARecruiter';
import RecruiterReviews from './components/RecruiterReviews';
import PostRecruiterReview from './components/PostRecruiterReview';

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/searchByRecruiter" component={SearchByRecruiter} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/searchByCompany" component={SearchByCompany} />
            <Route exact path="/rateARecruiter" component={RateARecruiter} />
            <Route exact path="/recruiterReviews" component={RecruiterReviews} />
            <Route exact path="/postRecruiterReview" component={PostRecruiterReview} />
          </Switch>
        </div>
      </div>
    </Router>


  );
}

export default App;
