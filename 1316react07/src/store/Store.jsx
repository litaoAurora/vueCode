import React, { Component } from 'react';
import {Provider} from 'react-redux';
import RouterView from '../router/RouterView'
import {store} from './config'


class Store extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <RouterView />
                </Provider>
            </div>
        );
    }
}

export default Store