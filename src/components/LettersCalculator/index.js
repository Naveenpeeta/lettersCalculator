// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: ''}

  lettersCount = event => {
    const {value} = event.target
    this.setState({searchInput: value})
  }

  render() {
    const {searchInput} = this.state

    return (
      <div className="app-container">
        <div className="letters-container">
          <div className="calculator-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <div className="input-container">
              <label htmlFor="userInput" className="label ">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                id="userInput"
                className="letters-input"
                onChange={this.lettersCount}
              />
            </div>
            <p className="letters-count">No.of letters: {searchInput.length}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}
export default LettersCalculator
