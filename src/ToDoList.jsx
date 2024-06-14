
import { blackPinkList } from "./data";
import React, { useState} from 'react'



export default function TodoList() {
    const page = {
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }

    
    
    //Picture Carousel
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    
    let hasNext = index < blackPinkList.length - 1 
    let hasPrev = index > 0
    
    
    function handleNextClick() {
        if (hasNext) {
            setIndex(index + 1)
        }
    }
    
    function handlePrevClick() {
        setIndex(index - 1)
    }
    
    function handleMoreClick() {
        setShowMore(!showMore)
    }
    
    let blackPink = blackPinkList[index]
    
    //To-do-List
    const todos = [
        { id: 0, task: 'Meditate', isComplete: false },
        { id: 1, task: 'React Project', isComplete: false }, 
        { id: 2, task: 'Data Structure & Algorithms', isComplete: false }
    ]

    const [tasks, setTasks] = useState(todos)
    const [taskText, setTaskText] = useState('')

    // add task
    const addTask = () => {
        if (taskText.trim() !== "") {
            const newTask = {
                id: Date.now(),
                task: taskText.trim(),
                isComplete: false
            };
            setTasks([...tasks, newTask])
            setTaskText('')
        }
    }

    // toggle task completion
    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task) => 
            task.id === id ? { 
                ...task, 
                isComplete: !task.isComplete 
            } : task
        );
        setTasks(updatedTasks)
    }
    
    
    // delete task
    const deleteTask = (id) => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks)
    }


    return (
      <div style={page.theme}>
        <h2>{blackPink.artist}</h2>
        {showMore && <p>{blackPink.description}</p>}
        
        <img 
            onClick={handleMoreClick}
            src={blackPink.url} 
            alt={blackPink.alt} 
        />

        <h1>{blackPink.name} wants you to</h1>

        
        <div className="Todo-list">
        <ul>
            {tasks.map((task) => (
                <li
                    key={task.id}
                    style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}
                >
                    <span onClick={() => toggleTaskCompletion(task.id)}>{task.text}</span>
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
            <input 
                type='text'
                value={taskText}
                onChange={e => setTaskText(e.target.value)}
            />

            <button onClick={addTask}>
                Add Task
            </button>                
        </div>


        <button onClick={handlePrevClick} disabled={!hasPrev}>
            Previous
        </button>
        {' '}
        <button onClick={handleNextClick} disabled={!hasNext}>
            Next
        </button>
        
        <h3>
            ({index + 1} of {blackPinkList.length})
        </h3>
        

        
        
      </div>
    );
}