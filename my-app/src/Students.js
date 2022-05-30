import React, { Component } from 'react'

export default class Students extends Component {
    contructor(props) {
        super(props)
        this.state = {
            hasChanged: false
        }
    }
    increment = (event) => {
        this.setState({ hasChanged: true })
        this.props.increment(this.props.name)
    }
    render() {
        return (
            <div className='container my-3'>
                <div className='Students'>
                    <h2>{this.props.name}</h2>
                    <h2>{this.props.marks}</h2>
                    <button onClick={this.increment}>Add</button>
                    {this.state.hasChanged && (
                        <span>Updated</span>
                    )}
                </div>
            </div>
        )
    }
}
