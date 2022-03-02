import React, { Component } from 'react'

//this is a demo for event handlung in class comp
class ClassClick extends Component {
    clickHandler(){
        console.log('Bitton clicked')
    }
    render() {
    return (
      <div>
          <button onClick={this.clickHandler}>Click Me</button>
    </div>
    )
  }
}

export default ClassClick