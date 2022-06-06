import React, { Component } from 'react'

export default class Students extends Component {
  constructor(props){
      super(props);
      this.state = {
          hasChanged: false
      }
  }
  total = (event) => {
      this.setState({ hasChanged: true})
      this.props.total(this.props.name)
  }
    render() {
    return (
        <div className='container my-3'>
            <div className='Students'>
                <h2>Name: {this.props.name}</h2>
                <h3>Rollno: {this.props.rno}</h3>
                <h3>ST1 Marks: {this.props.st1}</h3>
                <h3>ST2 Marks: {this.props.st2}</h3>
                <h3>Total: {this.props.Total}</h3>
                <button onClick={this.total}>Total</button>
                {/* {this.state.hasChanged && (
                    <span>Updated</span>
                )} */}
            </div>
        </div>
    )
  }
}