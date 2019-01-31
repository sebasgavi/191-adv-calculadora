import React, { Component } from 'react';
import './App.css';
import { Display } from './Display';
import { Button } from './Button';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      current: '',
      previous: null,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick(symbol){
    /*this.setState({
      current: this.state.current + symbol,
    });*/
    switch (symbol){
      case '+': 
        this.setState((prevState) => {
          return {
            previous: prevState.current,
            current: ''
          }
        });
        break;
      
      default:
        this.setState(( abcv ) => {
          return {
            current: abcv.current + symbol
          }
        });
        break;
    }

  }

  render() {
    return (<article className="App">
      <Display 
        currentDisplay={this.state.current}
        previousDisplay={this.state.previous}
        operationDisplay="+" />
      
      <Button click={this.handleButtonClick} symbol="1" />
      <Button click={this.handleButtonClick} symbol="2" />
      <Button click={this.handleButtonClick} symbol="3" />
      <Button click={this.handleButtonClick} symbol="+" />
    </article>);
  }
}

export default App;
