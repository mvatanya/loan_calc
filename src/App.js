import React, { Component } from 'react';
import InputForm from './InputForm';
import './InputFormCss.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {monthlyPayment:'', totalPayment:'', interest:''}
  }

  calculatePayment = (principal, rate, year, downPayment) => {
    let newPrincipal = principal - downPayment
    let interest = rate /100/ 12;
    let payments = year *12;

    // Compute monthlypayment figure using esoteric math
    let x = Math.pow(1 + interest, payments);
    let monthly = (newPrincipal * x * interest) / (x-1);

    // Check that the result is a finite number. If so, setState the results.
    if (!isNaN(monthly) && 
        (monthly !== Number.POSITIVE_INFINITY) &&
        (monthly !== Number.NEGATIVE_INFINITY)) {
          this.setState({ 
            monthlyPayment: Math.round(monthly),
            totalPayment: Math.round(monthly * payments),
            interest: Math.round((monthly * payments) - newPrincipal)
          })
        }


  }


  render(){
    console.log(this.state)
    return(
      <div>
        <h3>Enter Loan Information</h3>
        <InputForm calculatePayment={this.calculatePayment}/>
        <div>
          <h3>Payment Information</h3>
          <ol>
            <li>Your monthly payment will be: {this.state.monthlyPayment}</li>
            <li>Your total payment will be:{this.state.totalPayment}</li>
            <li>Your total interest payment will be: {this.state.interest}</li>
          </ol>
        </div>
      </div>
    )
  }
}

export default App;