import React, { Component } from 'react';

class InputForm extends Component {
  constructor(props) {
    super(props);
    this.state = { principal: '', rate: '', year: '', downPayment:'' }
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value })
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.calculatePayment(this.state.principal, this.state.rate, this.state.year, this.state.downPayment)

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount of the loan</label>
            <input
              type='number'
              name='principal'
              onChange={this.handleChange}
              value={this.state.principal}
            />
          </div>

          <div>
            <label>Annual percentage rate of interest</label>
            <input
              type='number'
              name='rate'
              onChange={this.handleChange}
              value={this.state.rate}
            />
          </div>

          <div>
            <label>Repayment period in years</label>
            <input
              type='number'
              name='year'
              onChange={this.handleChange}
              value={this.state.year}
            />
          </div>

          <div>
            <label>Down Payment</label>
            <input
              type='number'
              name='downPayment'
              onChange={this.handleChange}
              value={this.state.downPayment}
            />
          </div>

          <button>Compute</button>
        </form>
      </div>
    )
  }
}

export default InputForm;