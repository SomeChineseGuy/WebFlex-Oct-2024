import { Component } from "react";

class ClassBased extends Component {
  // If we want to use State we HAVE to use a constructor
  constructor(props) {
    super(props);
    // Inside here is where we make state!
    this.state = {
      counter: 0,
      message: "How are you doing?"
    }

    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)

  }

  increment = () => {
  // increment () {
    // We NEVER do this
    // this.state += 1
    // console.log('fire');
    this.setState({ counter: this.state.counter + 1})
  }

  decrement() {
    this.setState({counter: this.state.counter - 1})
  }

  render() {
    return (
      <div>
        <h1>{this.props.title} - Counter: {this.state.counter}</h1>
        <div>
          <button onClick={this.increment}>Increment</button>
          <button onClick={this.decrement}>Decrement</button>
        </div>
        <p>{this.props.num}</p>
        <p>{this.state.message}</p>
      </div>
    )
  }

}

export default ClassBased

// const [name, setname ] = useState()
// const [name, setname ] = useState()
// const [name, setname ] = useState()
// const [name, setname ] = useState()
// useMemo
// useCallback