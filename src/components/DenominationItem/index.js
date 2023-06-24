// Write your code here
import {Component} from 'react'

import './index.css'

class DenominationItem extends Component {
  onClickSendValue = () => {
    const {denominations, getDenominationValue} = this.props
    const {value} = denominations
    getDenominationValue(value)
  }

  render() {
    const {denominations} = this.props
    const {value} = denominations

    return (
      <li className="denomination-item">
        <button
          className="denomination-button"
          type="button"
          onClick={this.onClickSendValue}
        >
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
