import { useState } from "react"

function TaskSelection() {
    const [ task, setTask] = useState('')
    
    function handleTaskChange(e) {
        setTask(e.target.value)
    }
    function handleReset() {
        setTask('')
    }
    
    return (
        <form onSubmit={e=> {
            e.preventDefault();
            setIsSent(true)
            
        }}>
            <input 
                placeholder="Enter Task Here"
                value={task}
                onChange={handleTaskChange}
            />
            <h1>
                You are currently working on {task}
            </h1>
            <button type="submit" onClick={handleReset}>Reset</button>

        </form>
    )
}


function Button({ onSmash, children}) {
    return (
        <button onClick={(e) => {
            e.stopPropagation();
            onSmash();

        }}>
            {children}
        </button>
    )
}

export default function Toolbar({ buildProject, interviewPrep}) {
    return (
        <div>
            <Button onSmash={buildProject}>
                Build Project
            </Button>
            
            <Button onSmash={interviewPrep}>
                Interview Prep
            </Button>

            <TaskSelection />
        </div>

    )
}
