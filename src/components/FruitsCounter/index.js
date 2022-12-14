// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoCount: 0, bananaCount: 0}

  eatMangoButton = () => {
    this.setState(prevState => ({mangoCount: prevState.mangoCount + 1}))
  }

  eatBananaButton = () => {
    this.setState(prevState => ({bananaCount: prevState.bananaCount + 1}))
  }

  render() {
    const {mangoCount, bananaCount} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            Bob ate <span className="spanEl">{mangoCount}</span> mangoes{' '}
            <span className="spanEl">{bananaCount}</span> bananas
          </h1>
          <div className="img-container">
            <div className="container">
              <img
                className="image"
                alt="mango"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              />
              <button
                onClick={this.eatMangoButton}
                type="button"
                className="button"
              >
                Eat Mango
              </button>
            </div>
            <div className="container">
              <img
                className="image"
                alt="banana"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              />
              <button
                onClick={this.eatBananaButton}
                type="button"
                className="button"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
