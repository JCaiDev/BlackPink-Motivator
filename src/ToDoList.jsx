import React, { Fragment } from "react";
import { useState } from 'react';
import { blackPinkList } from "./data";






export default function TodoList() {
    const page = {
        theme: {
            backgroundColor: 'black',
            color: 'pink'
        }
    }

    const todos = [{
        task: 'Meditate',
        isComplete: true
    },{
        task: 'React Project',
        isComplete: false
    } , {
        task: 'Data Structure & Algorithms',
        isComplete: false
    }]
    
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

    const [isSent, setIsSent] = useState(false);
    
    
    if (isSent) {
        return <h1>You are currently working on {task}</h1>
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

        <article>
            {todos.map((todo, i)=>
                <Fragment key ={i}>
                    {i > 0 && <hr />}
                    <p>
                        {todo.task} {todo.isComplete && ' ✔' }
                    </p>
                </Fragment>
            )}
        
        <button onClick={handlePrevClick} disabled={!hasPrev}>
            Previous
        </button>
        <button onClick={handleNextClick} disabled={!hasNext}>
            Next
        </button>
        
        <h3>
            ({index + 1} of {blackPinkList.length})
        </h3>
        

        </article>
        
      </div>
    );
}