import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getLoans } from '../../store/actions'
import Button from '../../common/Button/Button'
import './List.scss'

class List extends Component {
  componentDidMount() {
    console.log('mounted')
    this.props.getLoans()
  }

  start = () => {
    this.props.getLoans()
  }

  render() {
    window.List = this
    const list = this.props.list
    console.log(22222, this.props.list)
    return (
      <React.Fragment>
        {list.map((item, index) => (
          <div className="list" onDoubleClick={this.start} key={index}>
            <div className="list__wrapText">
              <div className="list__title"> {item.title} </div>
              <div className="list__details"> Loan details, amounts and value </div>
            </div>
            <div className="list__wrapBtn">
              {<div className="list__toast"> {true && 'Invested'} </div>}
              <div className="list__btn" onClick={this.invest}>
                <Button />
              </div>
            </div>
          </div>
        ))}
      </React.Fragment>
    )
  }
}

function mapStateToProps(state) {
  //   console.log(111, state)
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
