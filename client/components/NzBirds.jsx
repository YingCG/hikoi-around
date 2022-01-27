import React from 'react'
import Birdcard from './Birdcard'
import birdData from '../../data/birdData'

function NzBirds() {
    return (
        <>
            <h1>NZ Birdstories</h1>
            <div className='card-list'>
                {birdData.map((birds) => {
                    return <Birdcard key={birds.id} type={birds.type} name={birds.name} description={birds.description} />
                })}
            </div>
        </>
    )
}

export default NzBirds