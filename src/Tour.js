import React, { useState } from 'react'

const Tour = ({ id, name, info, image, price, removeTour }) => {
    const [isExtended, setIsExtended] = useState(false)
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>
                    {isExtended ? (
                        <>
                            {info}
                            <button onClick={() => setIsExtended(!isExtended)}>
                                show less
                            </button>
                        </>
                    ) : (
                        <>
                            {info.slice(0, 200)} ...{' '}
                            <button onClick={() => setIsExtended(!isExtended)}>
                                read more
                            </button>
                        </>
                    )}
                </p>
                <button className="delete-btn" onClick={() => removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    )
}

export default Tour
