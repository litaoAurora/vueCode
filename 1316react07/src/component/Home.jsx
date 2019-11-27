import React, { Component } from 'react';
import { connect } from 'react-redux';
import {mapStateToProps,mapDispatchToProps} from '../store/config'


class Home extends Component {
    render() {
        return (
            <div>
                 <div>
                    <h3>首页</h3>
                    <input type='text' value={this.props.msg} onChange={this.fn.bind(this)} />
                </div>
            </div>
        );
    }
    fn(ev){
        this.props.setMsg(ev.target.value);
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);