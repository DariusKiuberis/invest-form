import React, { Component } from 'react'
import './Content.scss'

class Content extends Component {
  render() {
    window.Content = this
    return <div className="content">TEST</div>
  }
}

export default Content
