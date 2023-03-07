import React from 'react'
import Tour from './Tour'

const Tours = ({ tours, removeTour }) => {
    return (
        <div className="tours">
            {tours.map((tour) => (
                <Tour key={tour.id} removeTour={removeTour} {...tour} />
            ))}
        </div>
    )
}

export default Tours
