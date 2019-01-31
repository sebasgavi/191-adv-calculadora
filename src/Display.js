import React, { Component } from 'react';
import './Display.css';

export class Display extends Component{
    render(){
        return (<section className="Display">
            <Previous 
                previous={this.props.previousDisplay} 
                operation={this.props.operationDisplay} />
            <Current current={this.props.currentDisplay} />
        </section>);
    }
}

class Previous extends Component {
    render(){
        return <h3>{this.props.previous} {this.props.operation}</h3>;
    }
}

const Current = function( props ){
    return <h2>{props.current}</h2>;
}