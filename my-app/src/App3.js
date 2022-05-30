import React, { Component } from 'react'
import Students from './components/Students';

export default class App3 extends Component {
  constructor() {
      super(); 
      this.state = {
          student: [
              { name: 'Vikas', marks: 5},
              { name: 'Rajinder', marks: 7},
              { name: 'Gagan', marks: 8},
              { name: 'Shiv', marks: 9},
              { name: 'Yogesh', marks: 7}

          ]
      }
    }
    increment = (name) => {
        let ppl = this.state.student.map((s) => {
            if(s.name === name){
                s.marks++
            }
            return s 
        })
        this.setState({student: ppl})
    }
    render(){
        return(
            <div className="App3">
                {this.state.student.map((student) =>(
                    <Students name={student.name}
                    marks={student.marks}
                    increment={this.increment}
                    />
                ) )}
            </div>
        )
    }
}