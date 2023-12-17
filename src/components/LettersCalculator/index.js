// Write your code here.
import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: ''}

  changeCount = event => {
    const {value} = event.target
    this.setState({lettersCount: value})
  }

  render() {
    const {lettersCount} = this.state

    return (
      <div className="bg-container">
        <div className="detail-container">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <p className="des">Enter the phrase</p>
          <input type="text" className="input" placeholder="Enter the phrase" />
          <br />
          <p
            className="no-letters"
            onChange={this.changeCount}
            value={lettersCount}
          >
            No.of Letters: {lettersCount.length}
          </p>
        </div>
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
