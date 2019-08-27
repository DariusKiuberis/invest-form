import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
// import { getLoans, addValue } from '../../store/actions'
import Button from '../../common/Button/Button'
// import InvestForm from '../../common/InvestForm/InvestForm'
import './List.scss'

class List extends Component {
  state = {
    loans: [
      {
        id: '0',
        title: 'Voluptate et sed tempora qui quisquam.',
        tranche: 'A',
        available: '11,959',
        annualised_return: '8.60',
        term_remaining: '864000',
        ltv: '48.80',
        amount: '85,754',
      },
      {
        id: '1',
        title: 'Consectetur ipsam qui magnam minus dolore ut fugit.',
        tranche: 'B',
        available: '31,405',
        annualised_return: '7.10',
        term_remaining: '1620000',
        ltv: '48.80',
        amount: '85,754',
      },
      {
        id: '2',
        title: 'Dolores repudiandae ut voluptas unde laborum quaerat et sapiente.',
        tranche: 'C',
        available: '12,359',
        annualised_return: '4.80',
        term_remaining: '879000',
        ltv: '48.80',
        amount: '85,754',
      },
    ],
    value: null,
    investForm: false,
    totalAmount: null,
    id: '',
    showInvestedLabel: false,
  }

  componentDidMount() {
    const availableAmaunt = this.state.loans
      .map(item => {
        let items = item.amount
        let totalAmount = parseInt(items.replace(/,/g, ''))
        return totalAmount
      })
      .reduce((a, b) => a + b)
    this.setState({ totalAmount: availableAmaunt })

    // if (this.props.list.length < 3) {
    //   this.props.getLoans()
    // } else {
    //   // console.log('Hacky way to prevent fetch list more then ones')
    // }
  }

  invest = id => {
    this.setState({ investForm: true, id: id })
  }

  investAndClose = event => {
    event.preventDefault()
    const amount = event.target.amount.value
    let totalAmount = parseInt(amount.replace(/,/g, '')) || 0
    // const {name, value} = event.target.amount;
    this.setState({ value: totalAmount })
    let loansCopy = JSON.parse(JSON.stringify(this.state.loans))
    let stringToNumber = parseInt(loansCopy[this.state.id].amount.replace(/,/g, ''))
    let newTotalAmount = this.state.totalAmount - totalAmount
    let result = stringToNumber - totalAmount
    let finalResult = result.toString()
    loansCopy[this.state.id].amount = finalResult
    console.log(111, finalResult, newTotalAmount)
    // let show = TODO show Invested label for choosen item.(now indicates on all lists)
    this.setState({ investForm: false, loans: loansCopy, totalAmount: newTotalAmount, showInvestedLabel: true })
  }

  render() {
    window.List = this

    const { loans } = this.state || {}
    console.log('this.state:', this.state)

    return (
      <React.Fragment>
        {loans.map((item, index) => (
          <div className="list" key={index}>
            <div className="list__wrapText">
              <div className="list__title"> {item.title} </div>
              <div className="list__details">
                Loan details: <b>{item.tranche}</b>, amounts: <b>{item.amount}</b> and value:
                <b>{item.annualised_return}</b>
              </div>
            </div>
            <div className="list__wrapBtn">
              {<div className="list__toast"> {this.state.showInvestedLabel && 'Invested'} </div>}
              <div className="list__btn" onClick={() => this.invest(item.id)}>
                <Button />
              </div>
            </div>
          </div>
        ))}
        <div className="list__total">
          Total amount available for investments: <b> {this.state.totalAmount}</b>
        </div>

        {this.state.investForm && (
          <div className="investForm" ref={this.el}>
            <div className="investForm__title">
              <b>Invest in Loan</b>
            </div>
            <div className="investForm__available">Amount available: {this.state.totalAmount}</div>
            <div className="investForm__ends">Loan ends in: month days</div>
            <div className="investForm__amount"> Investment amount ${this.state.value}</div>

            <div>
              <form className="investForm__wrapForm" onSubmit={this.investAndClose}>
                <div className="investForm__inputNumber">
                  <input type="number" name="amount" placeholder="enter amount to invest" />
                </div>
                <div className="investForm__submit">
                  <input type="submit" value="INVEST" />
                </div>
              </form>
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  return {
    list: state.reduser.list,
  }
}

const mapDispatchToProps = {
  // getLoans,
  // addValue,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
