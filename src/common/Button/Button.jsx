import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
  state = { style: '' }

  render() {
    const { config } = this.props
    // const { style } = this.state
    // const { style = {} } = config
    // console.log('button this.props: ', this.props, typeof this.props.config)
    return (
      <div className={`btn ${this.state.style}`}>
        <button>INVEST</button>
      </div>
    )
  }
}

export default Button
