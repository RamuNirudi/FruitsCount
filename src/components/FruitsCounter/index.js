import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count2: 0}

  onMangoo = () => {
    this.setState(prevstate => ({count: prevstate.count + 1}))
  }

  onBanana = () => {
    this.setState(prevstate => ({count2: prevstate.count + 1}))
  }

  render() {
    const {count, count2} = this.state

    return (
      <div className="container">
        <div className="card-container">
          <h1 className="heading">
            {' '}
            Bob ate <span className="span1"> {count} </span>mangoes{' '}
            <span className="span1">{count2} </span>bananas{' '}
          </h1>
          <div>
            <img
              alt="mango"
              className="image1"
              src=" https://assets.ccbp.in/frontend/react-js/mango-img.png "
            />

            <img
              alt="banana"
              className="image1"
              src=" https://assets.ccbp.in/frontend/react-js/banana-img.png  "
            />
          </div>
          <div>
            <button
              className="btn mangooo1"
              type="button"
              onClick={this.onMangoo}
            >
              {' '}
              Eat Mango{' '}
            </button>
            <button
              className="btn mangooo2"
              type="button"
              onClick={this.onBanana}
            >
              {' '}
              Eat Banana{' '}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
