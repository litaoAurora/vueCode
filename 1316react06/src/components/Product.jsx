import React, { Component } from 'react';
import Store from '../store/Store'

class Product extends Component {
    render() {
        return (
            <div>
                <h3>产品</h3>
                <Store />
            </div>
        );
    }
}

export default Product;