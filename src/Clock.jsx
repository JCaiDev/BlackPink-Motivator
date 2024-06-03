export default function Clock({ time }) {
    const hours = time.getHours()
    const className = hours > 21 || hours <= 6 ? 'night' : 'day';
    
    function formateDate(date) {
        return date.toLocaleDateString('en-US',
            { weekday: 'long' })
    }

    return (
        <h1 id ="time" className={className} >
            Today is {formateDate(time)}, {time.toLocaleTimeString()}
        </h1>
    )
}