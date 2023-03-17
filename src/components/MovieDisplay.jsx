import { useEffect, useState } from "react"
import React from "react"

export default function MovieDisplay(props)
{
    const { movie } = props

    const [showMore, setShowMore] = useState(false)

    useEffect(() =>
    {
        setShowMore(false)
    }, [movie])

    const loaded = () =>
    {
        return (
            <div className="MovieDisplay">
                <h1>{movie.title}</h1>
                <div className="MovieDisplay__img-container">
                    <img src={movie.poster} alt={movie.title} />
                </div>
                <h2>Released: {movie.released}</h2>
                <h2>Genre(s): {movie.genre}</h2>
                <p>{movie.plot}</p>
                {
                    !showMore && <p className="MovieDisplay__more" onClick={() => setShowMore(true)}>more...</p>
                }
                {
                    showMore && (
                        <>
                            <p>Directed by: {movie.director}</p>
                            <p>Written by: {movie.writer}</p>
                            <p>Actors: {movie.actors}</p>
                            <p>Duration: {movie.runtime}</p>

                            {
                                movie.ratings.map((rating, i) => (
                                    <React.Fragment key={i}>
                                        <h3>Rated by: {rating.Source}</h3>
                                        <p>Score: {rating.Value}</p>
                                    </React.Fragment>
                                ))
                            }
                        </>
                    )
                }
            </div>
        )
    }

    return movie ? loaded() : <h2>Loading...</h2>
}
