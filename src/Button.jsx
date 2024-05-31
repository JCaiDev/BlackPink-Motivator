function Signup() {
    return (
        <form onSubmit={e=> {
            e.preventDefault();
            alert('submitting form!')
        }}>
            <input />
            <button>Submit</button>

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

            <Signup />
        </div>

    )
}
