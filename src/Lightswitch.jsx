export default function Lightswitch() {
    function handleClick() {
        let bodyStyle = document.body.style;
        if (bodyStyle.backgroundColor === 'black') {
            bodyStyle.backgroundColor = 'white'
        } else {
            bodyStyle.backgroundColor = 'black'
        }
    }
    return (
        <button onClick={handleClick}>
            Toggle The Lights
        </button>
    )
}