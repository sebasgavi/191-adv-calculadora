import React, { Component } from 'react';
import './Display.css';

export class Display extends Component{
    render(){
        return (<section className="Display">
            <Previous 
                chain={this.props.chain} />
            <Current current={this.props.currentDisplay} />
        </section>);
    }
}

const Previous = function( { chain } ){
    return <h3>
        {chain.map((elem, i) => <span key={i}>{elem}</span>)}
    </h3>;
}

const Current = function( props ){
    return <h2>{props.current}</h2>;
}


class ___Previous extends Component {
    render(){
        return <h3>{this.props.previous} {this.props.operation}</h3>;
    }
}