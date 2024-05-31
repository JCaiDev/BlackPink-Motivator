import React, { Fragment } from "react";

const person = {
    name: 'LaLisa',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
}
const avatar = "https://i.imgur.com/KdeCr0Q.png"
const description = "LaLisa"

const today = new Date();

function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-US',
        { weekday: 'long' }
    ).format(date);
}


export default function TodoList() {
    const todos = [{
        task: 'Meditate',
        isComplete: true
    },{
        task: 'Work on React Project for 45 minutes',
        isComplete: false
    } , {
        task: 'Practice 1 DSA Pattern',
        isComplete: false
    }]
    
    return (
      <div style={person.theme}>
        <h1>Today is {formatDate(today)}</h1>
        <img
            className="avatar"
            src={avatar}
            alt={description}
            
        />
        <h1>{person.name} wants you to</h1>
        <article>
            {todos.map((todo, i)=>
                <Fragment key ={i}>
                    {i > 0 && <hr />}
                    <p>
                        {todo.task} {todo.isComplete && ' ✔' }
                    </p>
                </Fragment>
            )}

        </article>
        
      </div>
    );
}