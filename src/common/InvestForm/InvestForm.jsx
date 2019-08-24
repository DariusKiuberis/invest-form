import React, { Component } from 'react'
import Input from '../Input/Input'
import Button from '../Button/Button'
import './InvestForm.scss'

class InvestForm extends Component {
  test = () => {
    // console.log(5555)
  }

  render() {
    window.InvestForm = this
    const style = { style: 'active' }
    return (
      <div className="investForm">
        <div className="investForm__title">Invest in Loan</div>
        <div>Amount available: </div>
        <div>Loan ends in: month days</div>
        Investment amount $
        <div>
          <Input />
        </div>
        <div onClick={this.test}>
          <Button config={style} />
        </div>
      </div>
    )
  }
}

export default InvestForm
