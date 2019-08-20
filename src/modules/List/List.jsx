import React, { Component } from 'react'
import Button from '../../common/Button/Button'
import './List.scss'

class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list__wrapText">
          <div className="list__title"> Loan name </div>
          <div className="list__details"> Loan details, amounts and value </div>
        </div>
        <div className="list__wrapBtn">
          {<div className="list__toast"> {true && 'Invested'} </div>}
          <div className="list__btn">
            <Button />
          </div>
        </div>
      </div>
    )
  }
}

export default List
