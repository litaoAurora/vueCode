import React, { Component } from 'react';

class Box1 extends Component {
    render() {
        return (
            <div>
                <input type='button' value='+' onClick={this.add.bind(this)}/>
                <h3>{this.props.count}</h3>
                <input type='button' value='-' onClick={this.reduce.bind(this)}/>
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

export default Box1;