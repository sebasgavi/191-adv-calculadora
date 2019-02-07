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
      operation: null,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  operate(numA, numB, operation){
    numA = parseFloat(numA);
    numB = parseFloat(numB);

    switch(operation){
      case '+':
        return numA + numB;
      case '-':
        return numA - numB;
    }
  }

  handleButtonClick(symbol){
    /*this.setState({
      current: this.state.current + symbol,
    });*/
    switch (symbol){
      case '+':
      case '-':
        this.setState((prevState) => {
          return {
            previous: prevState.current,
            current: '',
            operation: symbol,
          }
        });
        break;

      case '=': 
        this.setState(({ previous, current, operation }) => {
          return {
            previous: null,
            current: this.operate(previous, current, operation),
            //current: parseInt(previous) - parseInt(current),
            operation: null,
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
        operationDisplay={this.state.operation} />
      
      <Button click={this.handleButtonClick} symbol="1" />
      <Button click={this.handleButtonClick} symbol="2" />
      <Button click={this.handleButtonClick} symbol="3" />
      <Button click={this.handleButtonClick} symbol="+" />
      <Button click={this.handleButtonClick} symbol="-" />
      <Button click={this.handleButtonClick} symbol="=" />
    </article>);
  }
}

export default App;
