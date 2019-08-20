import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testRedux } from '../../store/actions'
import Button from '../../common/Button/Button'
import './List.scss'

class List extends Component {
  start = () => {
    this.props.testRedux()
  }

  render() {
    window.List = this
    return (
      <div className="list">
        <div className="list__wrapText">
          <div className="list__title"> Loan name {this.props.testState} </div>
          <div className="list__details"> Loan details, amounts and value </div>
        </div>
        <div className="list__wrapBtn">
          {<div className="list__toast"> {true && 'Invested'} </div>}
          <div className="list__btn" onClick={this.start}>
            <Button />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  console.log(111, state)
  return {
    testState: state.reduser.number,
  }
}

const mapDispatchToProps = {
  testRedux,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List)
