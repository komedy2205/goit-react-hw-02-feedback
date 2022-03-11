import React from "react"

const Controls = ({goodIncrement, neutralIncrement, badIncrement}) => {
    return <div>
        <p>Please leave feedback</p>
        <button type='button' onClick={goodIncrement}>good</button>
        <button type='button' onClick={neutralIncrement}>neutral</button>
        <button type='button' onClick={badIncrement}>bad</button>
        </div>
}

export default Controls;