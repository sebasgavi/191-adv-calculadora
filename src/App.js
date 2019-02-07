import React, { Component } from 'react';
import './App.css';
import { Display } from './Display';
import { Button } from './Button';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      current: '',
      chain: [],
      //previous: null,
      //operation: null,
    };

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  /**
   * Retorna el resultado de una cadena de operaciones
   * @param {string[]} chain 
   */
  operateChain(chain){
    let res = [];

    /**
     * Primero operamos sobre multiplicaciones y divisiones, ignoramos el resto
     */
    for(let index = 0; index < chain.length; index++){
      let elem = chain[index];
      switch(elem){
        case '*':
        case '/':
          let last = res[res.length - 1];
          res[res.length - 1] = this.operate(last, chain[index + 1], elem);
          index++;
          break;

        default:
          res.push(elem);
          break;
      }
    };

    /**
     * Operamos sumas y restas
     */
    let total = res[0];
    for(let index = 0; index < res.length; index++){
      let elem = res[index];
      if(elem == '+' || elem == '-'){
        total = this.operate(total, res[index + 1], elem);
        index++;
      }
    }

    return total;
  }

  /**
   * Retorna el resultado de una operación entre dos números
   * @param {string} numA 
   * @param {string} numB 
   * @param {string} operation 
   */
  operate(numA, numB, operation){
    numA = parseFloat(numA);
    numB = parseFloat(numB);

    switch(operation){
      case '+':
        return numA + numB;
      case '-':
        return numA - numB;
      case '*':
        return numA * numB;
      case '/':
        return numA / numB;
    }
  }

  handleButtonClick(symbol){
    /*this.setState({
      current: this.state.current + symbol,
    });*/
    switch (symbol){
      case '+':
      case '-':
        this.setState(({ current, chain }) => {
          if(!current) return;
          chain.push(current);
          chain.push(symbol);
          return {
            current: '',
            chain: chain,
            //previous: prevState.current,
            //operation: symbol,
          }
        });
        break;

      case '=':
        this.setState(({ previous, current, operation }) => {
          if(!previous || !current || !operation) return;
          return {
            previous: null,
            current: this.operate(previous, current, operation),
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
        chain={this.state.chain} />
      
      <Button click={this.handleButtonClick} symbol="1" />
      <Button click={this.handleButtonClick} symbol="2" />
      <Button click={this.handleButtonClick} symbol="3" />
      <Button click={this.handleButtonClick} symbol="+" />
      <Button click={this.handleButtonClick} symbol="-" />
      <Button click={this.handleButtonClick} symbol="*" />
      <Button click={this.handleButtonClick} symbol="/" />
      <Button click={this.handleButtonClick} symbol="=" />
    </article>);
  }
}

export default App;
