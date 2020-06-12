import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import User from './components/users/User';
import Navbar from './components/layout/navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Expectations from './components/pages/Expectations';
import Programs from './components/pages/Programs';
import Team from './components/pages/Team';

import NotFound from './components/pages/NotFound';
import './App.scss';

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
    return (
                <Router>
                    <div className='App'>
                        <Navbar />
                        <div className='container'>
                            <Switch>
                                <Route exact path='/' component={Home} />
                                <Route exact path='/about' component={About} />

                                <Route exact path='/expect' component={Expectations} />
                                <Route exact path='/programs' component={Programs} />
                                <Route exact path='/team' component={Team} />
                                <Route
                                    exact
                                    path='/user/:login'
                                    component={User}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
    );
};

export default App;
