
import { blackPinkList } from "./data";
import React, { useState} from 'react'
import './TodoList.css';


export default function TodoList() {
    const page = {
        theme: {
            backgroundColor: 'black',
            color: 'pink',
            minHeight: '100vh',
            padding: '20px',
        },
    };

    
    
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
        { id: 0, text: 'Make Reservation at a Michelin-star Restaurant', isComplete: false }, 
    ]

    const [tasks, setTasks] = useState(todos)
    const [taskText, setTaskText] = useState('')

    // add task
    const addTask = () => {
        if (taskText.trim() !== "") {
            const newTask = {
                id: Date.now(),
                text: taskText.trim(),
                isComplete: false
            };
            setTasks([...tasks, newTask])
        }
        console.log("task:", tasks)
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
            className="carousel-image"
            
        />

        <h1>{blackPink.name} wants you to</h1>

        
        <div className="Todo-list">
            <ul>
                {tasks.map((task) => (
                    <li
                        key={task.id}
                        className="task-item"
                        style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}
                    >
                        <span onClick={() => toggleTaskCompletion(task.id)}>
                            {task.text}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            
            <div className="add-task">
                <input
                    type='text'
                    value={taskText}
                    onChange={e => setTaskText(e.target.value)}
                    className="task-input"
                    placeholder="New Task..."
                />

                <button onClick={addTask} className="add-button">
                    Add Task
                </button>                
            </div>
        </div>

        <div className="carousel-controls">
            <button onClick={handlePrevClick} disabled={!hasPrev} className="carousel-button">
                Previous
            </button>
            <button onClick={handleNextClick} disabled={!hasNext} className="carousel-button">
                Next
            </button>
        </div>
        
        <h3>
            ({index + 1} of {blackPinkList.length})
        </h3>
        

        
        
      </div>
    );
}
