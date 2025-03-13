import { Component } from "react";

class LifeCycle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "Joey"
    }
  }

  // this function will run after inital render 
  // useEffect(()  => {}, [])
  componentDidMount() {
    // console.log('Component did Mount');
    const interv  = setInterval(() => {
      console.log('New Time has come');
    }, 2000)
    this.setState({interv})
  }
  
  // This function will WATCH for rerender from your props or state
  // useEffect(()  => {}, [props, state])
  componentDidUpdate(prepProps, prepState) {
    if(prepState.username !== this.state.username) {
      // this means someone has updated this.state.username
      // This if statement will fire
    }

  }


  // This function will run if the component ends
  // useEffect(()  => {
  //  return () {}
  // }, [])
  componentWillUnmount() {
    // console.log('HEllo!');
    clearInterval(this.state.interv)
  }

  render() {
    // console.log('Inside of render');
    return (
      <div>
        <h1>Life Cycle</h1>
        <h2>{this.state.username}</h2>
      </div>
    )
  }
}

export default LifeCycle;