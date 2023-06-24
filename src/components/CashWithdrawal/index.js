// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {currentBalance: 2000}

  getDenominationValue = value => {
    const {currentBalance} = this.state
    if (currentBalance >= value) {
      this.setState(prevState => ({
        currentBalance: prevState.currentBalance - value,
      }))
    } else {
      alert('No enough balance')
    }
  }

  render() {
    const {denominationsList} = this.props
    const {currentBalance} = this.state
    const fullName = 'Sarah Williams'
    const firstChar = fullName.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="header-container">
            <div className="profile-container">
              <div className="profile-first-char-container">
                <h1 className="profile-first-char">{firstChar}</h1>
              </div>
              <h1 className="profile-name">{fullName}</h1>
            </div>
            <div className="balance-container">
              <p className="balance-heading">Your Balance</p>
              <div className="balance-info-con">
                <p className="balance-amount">{currentBalance}</p>
                <p className="balance-in-rupees">In Rupees</p>
              </div>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="withdraw-heading">Withdraw</p>
            <p className="withdraw-sub-heading">CHOOSE SUM (IN RUPEES)</p>
            <ul className="denominations-list">
              {denominationsList.map(eachItem => (
                <DenominationItem
                  key={eachItem.id}
                  denominations={eachItem}
                  getDenominationValue={this.getDenominationValue}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
