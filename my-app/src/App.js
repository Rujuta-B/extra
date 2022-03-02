import React from 'react'
import Welcome from './components/Welcome';
import Destructuring from './components/Destructuring';
// import Message from "./components/Message";
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
    
    <Destructuring name="bruce" heroName={"superman"} />
    {/* <Counter /> */}
     {/* < Message /> */}
    </div>
  );
}

export default App;
