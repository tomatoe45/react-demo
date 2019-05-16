import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './css/App.css';

import CSSTransition from './components/CSSTransition';
import Tgroup from './components/tgroup';
import TransitionComp from './components/Transition';
import User from './components/user';

const App = () => {
    return (
        <BrowserRouter>
            <div>
                <div className="anim_index">
                    <Link to="/transition">Transition</Link>
                    <Link to="csstransition">CSSTransition</Link>
                    <Link to="/tgroup">Transition Group</Link>
                    <Link to="/user">User</Link>
                </div>
                <Route path="/transition" component={TransitionComp}></Route>
                <Route path="/csstransition" component={CSSTransition}></Route>
                <Route path="/tgroup" component={Tgroup}></Route>
                <Route path="/user" component={User}></Route>
            </div>
        </BrowserRouter>
    )
}

export default App;