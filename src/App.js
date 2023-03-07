import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
    const [tours, setTours] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [refresh, setRefresh] = useState(false)

    const removeTour = function (id) {
        setTours((prevTours) => {
            return prevTours.filter((tour) => tour.id !== id)
        })
    }

    const refreshFn = () => {
        setRefresh(!refresh)
        setIsLoading(true)
    }

    useEffect(() => {
        const getTours = async () => {
            try {
                const res = await fetch(url)
                const data = await res.json()
                setTours(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getTours()
    }, [refresh])

    if (isLoading) {
        return (
            <main>
                <section>
                    <Loading />
                </section>
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className="btn" onClick={refreshFn}>
                        refresh
                    </button>
                </div>
            </main>
        )
    }
    return (
        <main>
            <section>
                <div className="title">
                    <h2>our tours</h2>
                    <div className="underline"></div>
                </div>
                <Tours tours={tours} removeTour={removeTour} />
            </section>
        </main>
    )
}

export default App
