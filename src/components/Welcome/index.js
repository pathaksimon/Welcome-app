import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {subscribe: true}

  onIncrement = () => {
    this.setState(prevState => ({
      subscribe: !prevState.subscribe,
    }))
  }

  jaddu = () => {
    const {subscribe} = this.state

    if (subscribe === false) {
      return 'Subscribed'
    }
    return 'Subscribe'
  }

  render() {
    const meeting = this.jaddu()

    return (
      <div className="bg-container">
        <h1 className="head">Welcome</h1>
        <p className="para">Thank you! Happy Learning</p>
        <button className="bitta" type="button" onClick={this.onIncrement}>
          {meeting}
        </button>
      </div>
    )
  }
}

export default Welcome
