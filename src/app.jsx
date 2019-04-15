import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      twenties: 0,
      tens: 0,
      fives: 0,
      ones: 0,
      quarters: 0,
      dimes: 0,
      nickels: 0,
      pennies: 0,
      due: 0,
      received: 0,
      change: 0,
      moreDue: false,
    };
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  calculate() {
    let changeLeft = (this.state.received * 100) - (this.state.due * 100);
    if (changeLeft < 0) {
      this.setState({
        moreDue: true,
      });
      return;
    }
    this.setState({ change: (changeLeft / 100).toFixed(2) });
    let twenty = Math.floor(changeLeft / 2000);
    changeLeft -= twenty * 2000;
    let ten = Math.floor(changeLeft / 1000);
    changeLeft -= ten * 1000;
    let five = Math.floor(changeLeft / 500);
    changeLeft -= five * 500;
    let one = Math.floor(changeLeft / 100);
    changeLeft -= one * 100;
    let quarter = Math.floor(changeLeft / 25);
    changeLeft -= quarter * 25;
    let dime = Math.floor(changeLeft / 10);
    changeLeft -= dime * 10;
    let nickel = Math.floor(changeLeft / 5);
    changeLeft -= nickel * 5;
    let penny = Math.floor(changeLeft / 1);

    this.setState({
      moreDue: false,
      twenties: twenty,
      tens: ten,
      fives: five,
      ones: one,
      quarters: quarter,
      dimes: dime,
      nickels: nickel,
      pennies: penny,
    });
  }

  render() {
    return (
      <div className='container'>
        <div className='page-header'>
          <h1>Change Calulator</h1>
        </div>

        <div className='row'>
          <div className='col-4 well'>
            <div className='panel panel-default bg-light'>
              <div className='panel-heading'>Enter Information</div>
              <div className='panel-body bg-white'>
                <p>How much is due?</p>
                <input
                  name='amountDue' id='due' min='0' step='0.01' type='number'
                  onChange={ e => this.handleChange(e) }
                />
                <p>How much was received?</p>
                <input
                  name='amountReceived' id='received' min='0' step='0.01' type='number' 
                  onChange={ e => this.handleChange(e) } 
                />
              </div>
              <div className='panel-footer'>
                <button
                  type='button' className='btn' id='calculate' 
                  onClick={ () => this.calculate() }
                >Calculate</button>
              </div>
            </div>
          </div>

          <div className='col-8 well bg-white'>
            <div className={ 'alert alert-' + (this.state.moreDue ? 'warning' : 'success') } role='alert'>
              { this.state.moreDue ? 'Additional money owed.' : ('The total change due is $' + this.state.change) }
            </div>

            <div className='row'>
              <div className='col well text-center bg-light'>
                <h1>Twenties</h1>
                <p className='change'>{this.state.twenties}</p>
              </div>
              <div className='col well text-center bg-light'>
                <h1>Tens</h1>
                <p className='change'>{this.state.tens}</p>
              </div>
              <div className='col well text-center bg-light'>
                <h1>Fives</h1>
                <p className='col change'>{this.state.fives}</p>
              </div>
              <div className='col well text-center bg-light'>
                <h1>Ones</h1>
                <p className='change'>{this.state.ones}</p>
              </div>
              <div className='w-100' />
              <div className='col well text-center bg-light'>
                <h1>Quarters</h1>
                <p className='change'>{this.state.quarters}</p>
              </div>
              <div className='col well text-center bg-light'>
                <h1>Dimes</h1>
                <p className='change'>{this.state.dimes}</p>
              </div>
              <div className='col well text-center bg-light'>
                <h1>Nickels</h1>
                <p className='change'>{this.state.nickels}</p>
              </div>
              <div className='col well text-center bg-light'>
                <h1>Pennies</h1>
                <p className='change'>{this.state.pennies}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
