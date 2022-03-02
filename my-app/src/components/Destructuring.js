import React, { Component } from 'react'

// Desctructuring Props in functional comp

// (method - 1 )
// here while destructuring props, we dont use the props keyword and declare the prop as the function parameter directly

// const Greet = ({name, heroName}) => {
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
    
//     </div>
//   )
// }

// method - 2
// here we destructer in the function body instead of parameter and assign the name and heroname property to the prop object.
// const Greet = (props) => {
//   const {name, heroName} = props
//   return (
//     <div>
//       <h1>
//         Hello {name} a.k.a {heroName}
//       </h1>
    
//     </div>
//   )
// }

// Desctructuring Props in Class Component!!!
// In Class comp we destructure in the render method.

class Destructuring extends Component {
  render() {
    const {name, heroName} = this.props
    return( 
      <div>
        <h1>Welcome {name} a.k.a {heroName}</h1>
      </div>
    )
  }
}

// Destructuting in STATE is done in similar way. Only write this.state instead of this.props
//eg: const {name, heroName} = this.state
export default Destructuring