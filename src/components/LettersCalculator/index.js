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
        <div className="sub-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="phrase-container">
              <label className="label" htmlFor="phraseText">
                Enter the phrase
              </label>
              <br />
              <input
                type="text"
                id="phraseText"
                className="input"
                placeholder="Enter the phrase"
                value={lettersCount}
                onChange={this.changeCount}
              />
            </div>
            <p className="num-letters">No.of Letters: {lettersCount.length}</p>
          </div>

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
