import React from 'react'

function Birdcard(props) {
    return (

        <div className='card'>
            <h3>{props.name}</h3>
            <h5>{props.type}</h5>
            <p>{props.description}</p>
            <button>I see one!</button>
            <button>Local Tale</button>

        </div>
    )
}

export default Birdcard