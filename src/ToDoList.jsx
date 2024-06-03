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
        task: 'Work on React Project for 45 minutes',
        isComplete: false
    } , {
        task: 'Practice 1 DSA Pattern',
        isComplete: false
    }]
    
    const [index, setIndex] = useState(0)
    const [showMore, setShowMore] = useState(false)
    
    
    function handleNextClick() {
        setIndex(index + 1)
    }
    
    function handleMoreClick() {
        setShowMore(!showMore)
    }


    let blackPink = blackPinkList[index]

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
        <button onClick={handleNextClick}>
            Next
        </button>
        <h3>
            ({index + 1} of {blackPinkList.length})
        </h3>
        

        </article>
        
      </div>
    );
}