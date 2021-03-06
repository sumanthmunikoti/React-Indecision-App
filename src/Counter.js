import React from 'react'

class Counter extends React.Component {

  constructor(props) {
    super(props)
    this.state= {
      count: 0
    }
  }

  componentDidMount() {
    const json = parseInt(localStorage.getItem('count'))

    if (!isNaN(json)) {
        this.setState(() => ({ count : json }))
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
        localStorage.setItem('count', this.state.count)
    }
  }

  handleAddOne = () => {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    })
  }
  
  handleMinusOne = () => {
    this.setState((prevState) => {
      return{
        count: prevState.count - 1
      }
    })
  }
  
  handleReset = () => {
    this.setState(() => {
      return {
        count: 0
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}

// Counter.defaultProps = {
//     count : 0
// }

export default Counter