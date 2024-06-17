import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'


import TodoList from './ToDoList.jsx';
import Clock from './Clock.jsx'
import Toolbar from './Toolbar.jsx';
import Lightswitch from './Lightswitch.jsx'
import CounterList from './CounterList.jsx'




export default function App() {
  

  return (
    <>
      <div>

        <Clock />
        <TodoList />

       
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
      
      
    </>
  )
}






