import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { getLoans } from '../../store/actions'
import Button from '../../common/Button/Button'
// import InvestForm from '../../common/InvestForm/InvestForm'
import './List.scss'

class List extends Component {
  state = {
    investForm: false,
  }

  componentDidMount() {
    if (this.props.list.length < 3) {
      this.props.getLoans()
      this.setState({ investForm: false })
    } else {
      console.log('Hacky way to prevent fetch list more then ones')
    }
  }

  invest = () => {
    console.log('clicked invest')

    this.setState({ investForm: true })
  }
  investAndClose = () => {
    this.setState({ investForm: false })
  }

  render() {
    window.List = this
    const list = this.props.list
    const { investForm } = this.state || {}
    // console.log(22222, this.props.list, 333, this.state.investForm)

    return (
      <React.Fragment>
        {list.map((item, index) => (
          <div className="list" key={index}>
            <div className="list__wrapText">
              <div className="list__title"> {item.title} </div>
              <div className="list__details">
                Loan details: <b>{item.tranche}</b>, amounts: <b>{item.amount}</b> and value
              </div>
            </div>
            <div className="list__wrapBtn">
              {<div className="list__toast"> {true && 'Invested'} </div>}
              <div className="list__btn" onClick={this.invest}>
                <Button />
              </div>
            </div>
          </div>
        ))}
        <div className="list__total">Total amount available for investments:</div>
        {this.state.investForm && (
          <div className="investForm" ref={this.el}>
            <div className="investForm__title">Invest in Loan</div>
            <div>Amount available: </div>
            <div>Loan ends in: month days</div>
            Investment amount $
            <div>
              <input type="number" />
            </div>
            <div onClick={this.investAndClose}>
              <Button />
            </div>
          </div>
        )}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  //   console.log("List.jsx stet: ", state)
  return {
    list: state.reduser.list,
  }
}

const mapDispatchToProps = {
  getLoans,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
