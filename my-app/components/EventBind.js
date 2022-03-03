import React, { Component } from 'react'
//there are 4 ways to BIND EVENT HANDLERS 
// TWO OF THEM ARE IN THE RENDER METHOD AND, 1 IS IN THE CONSTRUCTOR ITSELF (this one is mentioned in official docs as well)
export class EventBind extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      // bindind in the constructor  method -3 (since h=here binding happens only once in constructor this better than binding in the render method)
      //this.clickHandler = this.clickHandler.bind(this)
    }

//this is for method 1,2,3
//   clickHandler(){
//       this.setState({
//           message: 'goodbye'
//       })
//   }

//for method 4, it will be an arrow function
    clickHandler = () => {
        this.setState({
            message: 'GoodBye!'
        })
    }

    
    render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* without binding event handlers you will get undefined in console*/}

          {/* method 1 of binding */}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button>   */}
          
          {/* method 2 of binding */}
          {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
          
          {/* method 3 & 4 of binding */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind