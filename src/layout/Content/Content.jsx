import React, { Component } from 'react'
import List from '../../modules/List/List'
import './Content.scss'

class Content extends Component {
  render() {
    window.Content = this
    return (
      <div className="content">
        <div className="content__wrapList">
          <div className="content__title"> Current Loans </div>
          <div className="content__listTop">
            <List />
          </div>
          {/* <div className="content__listMiddle">
            <List />
          </div>
          <div className="content__listBottom">
            <List />
          </div> */}
          <div className="content__total">Total amount available for investments:</div>
        </div>
      </div>
    )
  }
}

export default Content
