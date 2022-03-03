import React from 'react'
import style from './App.module.css'
// import Message from "./components/Message";
// import Counter from './components/Counter';
// import EventBind from './components/EventBind';
import { HooksCounter } from './components/HooksCounter';
import { HooksCounterTwo } from './components/HooksCounterTwo';
import { HooksExample3 } from './components/HooksExample3';
import { HooksExample4 } from './components/HooksExample4';

function App() {
  return (
    <div className="App">
      <div className={style.container}>
      <HooksExample4 />
    {/* <HooksExample3 /> */}
    {/* <HooksCounterTwo /> */}
    {/* <HooksCounter /> */}
    {/* <EventBind /> */}
    {/* <Counter /> */}
     {/* < Message /> */}
      </div>
   
    </div>
  );
}

export default App;
