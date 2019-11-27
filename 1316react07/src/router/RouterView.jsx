import React, { Component } from 'react';
import {HashRouter as Router,Route,NavLink,Switch,Redirect} from 'react-router-dom'
import {routes} from './config'

class RouterView extends Component {
    render() {
        return (
            <Router>
                <React.Fragment>
                    {
                        routes.map((d,i)=>(
                            <NavLink key={i} to={d.path}>{d.content}</NavLink>
                        ))
                    }
                    <Switch>
                        {
                             routes.map((d,i)=>(
                                <Route key={i} path={d.path} component={()=>(<d.component />)} />
                            ))
                        }
                        <Redirect path='/' to='/home' />
                    </Switch>
                </React.Fragment>
            </Router>
        );
    }
}

export default RouterView;