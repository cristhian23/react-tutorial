import Home  from './home';
import Contact  from './contact';
import About  from './about';
import Page404  from './page404';

import React,{Component} from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

export default() =>(
    <BrowserRouter>
    <Switch>
        <Route exact path="/home" component ={Home}/>
        <Route exact path="/about" component ={About}/>
        <Route exact path="/contact" component ={Contact}/>
        <Route exact path="/" component ={Home}/>
        <Route component ={Page404}/>
        
    </Switch>
    </BrowserRouter>
);