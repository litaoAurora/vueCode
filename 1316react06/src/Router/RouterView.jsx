import React, { Component } from 'react';
import {HashRouter as Router,Route,Switch,NavLink,Redirect} from 'react-router-dom'
import routes from './config'


class RouterView extends Component {
    render() {
        return (
            <div>
                 <Router>
                    <React.Fragment>
                    {
                        routes.map((d,i)=>(
                            <NavLink to={d.path}>{d.content}</NavLink>
                        ))
                    }
                    <Switch>
                        {
                            routes.map((d,i)=>(
                                <Route path={d.path} component={d.component} />
                            ))
                        }
                        <Redirect path='/' to='/home' />
                    </Switch>
                    </React.Fragment>
                </Router> 
            </div>
        );
    }
}

export default RouterView;