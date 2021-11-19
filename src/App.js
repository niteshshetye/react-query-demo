import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';

// component
import NavBar from './components/Navbar'
import Post from './components/Posts/Post'
import Posts from './components/Posts/Posts'
import Admin from './components/Admin'

import './App.css'

const App = () => {
    return (
        <div className='container'>
            <Router>
                <NavBar />
                <Switch>
                    <Route path='/admin'>
                        <Admin />
                    </Route>
                    <Route path='/posts/:id'>
                        <Post />
                    </Route>
                    <Route path='/posts'>
                        <Posts />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App

