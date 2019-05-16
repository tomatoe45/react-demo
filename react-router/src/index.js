import React from 'react';
import ReactDOM from 'react-dom';

// import { MemoryRouter, Route, Link } from 'react-router-dom';
// import { HashRouter, Route, Link } from 'react-router-dom';
import { BrowserRouter, Route, Link, NavLink, Switch } from 'react-router-dom';

// Components
import Home from './components/home';
import Post from './components/post';
import Profile from './components/profile';
import PostItem from './components/post_item';
import Life from './components/life';
import Conditional from './components/conditional';
import User from './components/user';


const App = () => {
    return (
        <BrowserRouter>
            <div>
                <header>
                    <Link to="/">Home</Link>
                    <Link to="/post">Post</Link>
                    <NavLink 
                        to="/post"
                        activeStyle={{color: 'red'}}
                        activeClassName="selected"
                    >Post</NavLink>
                    <Link to={{
                        pathname: '/profile',
                        hash: '#',
                        search: '?profile=true'
                    }}>Profile</Link>
                    <NavLink to="/life">Life</NavLink>
                    <NavLink to="/conditional">Conditional</NavLink>
                    <NavLink to="/user">User</NavLink>
                    <hr/>
                </header>
                {/* <Route path="/" exact component ={Home}/>
                <Route path="/post" exact component={Post}/> */}
                <Switch>
                    {/* <Route path="/" component ={Home}/> */}
                    {/* <Redirect from="/profile" to="/" /> */}
                    <Route path="/post/:id/:username" component={PostItem}/>
                    <Route path="/post/:id" component={PostItem}/>
                    <Route path="/user" component={User}/>
                    <Route path="/life" component={Life}/>
                    <Route path="/conditional" component={Conditional}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/post" component={Post}/>
                    <Route path="/" exact component ={Home}/>
                    <Route render={() => <h1>404</h1>}/>>
                </Switch>

            </div>
        </BrowserRouter>
    )
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)