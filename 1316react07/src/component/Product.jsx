import React, { Component } from 'react';
import {connect} from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '../store/config'

class Product extends Component {
    render() {
        return (
            <div>
                <h3>产品</h3>
                <p>{this.props.msg}</p>
            </div>
        );
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Product);