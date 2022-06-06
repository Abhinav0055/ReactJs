import React, { Component } from 'react'
import Students from './components/Students';

export default class Apps extends Component {
  constructor() {
      super(); 
      this.state = {
          student: [
              { name: 'Vikas', rno: 5, st1: 25, st2: 30, Total:''},
              { name: 'Rajinder', rno: 7, st1: 27, st2: 31, Total:''},
              { name: 'Gagan', rno: 8, st1: 24, st2: 37, Total:''},
              { name: 'Shiv', rno: 9, st1: 29, st2: 38, Total:''},
              { name: 'Yogesh', rno: 7, st1: 23, st2: 33, Total:''}

          ]
      }
    }
    total = (name) => {
        let ppl = this.state.student.map((s) => {
            if(s.name === name){
                s.Total=s.st1+s.st2
            }
            return s 
        })
        this.setState({student: ppl})
    }
    render(){
        return(
            <div className="App">
                {this.state.student.map((student) =>(
                    <Students name={student.name}
                    rno={student.rno}
                    st1={student.st1}
                    st2={student.st2}
                    Total={student.Total}
                    total={this.total}
                    />
                ) )}
            </div>
        )
    }
}