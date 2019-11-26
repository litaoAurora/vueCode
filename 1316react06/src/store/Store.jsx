import React, { Component } from 'react';

import Box1 from '../components/Box1'
import Box2 from '../components/Box2'
import {Provider,connect} from 'react-redux'
import {stateToProps,dispatchToProps,store} from './config'

let NewBox1 = connect(stateToProps,dispatchToProps)(Box1);
let NewBox2 = connect(stateToProps,dispatchToProps)(Box2);

class Store extends Component {
    render() {
        return (
            <Provider store={store} >
                <React.Fragment>
                    <NewBox1 />
                    <NewBox2 />
                </React.Fragment>
            </Provider>
        );
    }
}

export default Store;