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

function Task({ name, isComplete}) {
    return (
        <li className="task">
            {name} {isComplete && ' ✔'}
        </li>
    ) 
        
}
export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>Today is {formatDate(today)}</h1>
        <img
            className="avatar"
            src={avatar}
            alt={description}
            
        />
        <h1>{person.name} wants you to</h1>
        
            <Task
                isComplete={false}
                name="Meditate"
            />    
            <Task
                isComplete={true}
                name="Work on React Project for 45 minutes"
            />    
            <Task 
                isComplete={false}
                name="Practice 1 DSA pattern"
            />    
        
      </div>
    );
}