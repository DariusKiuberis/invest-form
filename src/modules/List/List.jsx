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
    listAmount: '',
    showTitle: '',
    months: '',
    days: '',
  }

  componentDidMount() {
    const { loans } = this.state
    const availableAmaunt = loans
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

  invest = (id, title, term) => {
    let minutes = parseInt(term.replace(/,/g, ''))
    const MINS_PER_MONTH = 24 * 30 * 60
    const MINS_PER_DAY = 24 * 60
    let months = Math.floor(minutes / MINS_PER_MONTH)
    this.setState({ investForm: true, id: id, showTitle: title, months: months })
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
    this.setState({ investForm: false, loans: loansCopy, totalAmount: newTotalAmount, showInvestedLabel: true })
  }

  render() {
    window.List = this

    const { loans, value, investForm, totalAmount, id, showInvestedLabel, showTitle, months, days } = this.state || {}
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
              {<div className="list__toast">{item.id === id && showInvestedLabel && 'Invested'}</div>}
              <div className="list__btn" onClick={() => this.invest(item.id, item.title, item.term_remaining)}>
                <Button />
              </div>
            </div>
          </div>
        ))}
        <div className="list__total">
          Total amount available for investments: <b> {totalAmount}</b>
        </div>

        {investForm && (
          <div className="investForm" ref={this.el}>
            <div className="investForm__title">
              <b>{showTitle}</b>
            </div>
            <div className="investForm__available">Amount available: {totalAmount}</div>
            <div className="investForm__ends">
              Loan ends in: {months} month {days} days
            </div>
            <div className="investForm__amount"> Investment amount ${value}</div>

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
