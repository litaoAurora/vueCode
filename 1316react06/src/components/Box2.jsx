import React, { Component } from 'react';

class Box2 extends Component {
    render() {
        return (
            <div>
                <input type='button' value='+' onClick={this.add.bind(this)} />
                <span>{this.props.count}</span>
                <input type='button' value='-' onClick={this.reduce.bind(this)} />
            </div>
        );
    }

    add(){
        this.props.add();
    }
    reduce(){
        this.props.reduce();
    }
}

export default Box2;