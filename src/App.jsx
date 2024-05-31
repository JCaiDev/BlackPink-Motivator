import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


import TodoList from './ToDoList.jsx';
import Clock from './Clock.jsx'
import Toolbar from './Button.jsx';
import Lightswitch from './Lightswitch.jsx'




export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>

        <TodoList />
        <Clock time={new Date()} />

        <Toolbar
          buildProject={()=> alert('building!')}
          interviewPrep={() => alert('DSA-ing!')}
        />
        <Lightswitch />
      </div>
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        
      </div>
      
    </>
  )
}






