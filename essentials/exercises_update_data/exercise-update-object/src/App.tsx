import { useState } from 'react'

const App = () => {
    const [movie, setMovie] = useState({
        id: 1,
        title: 'The Lovely Bones',
        category: 'Comedy'
    })

    const handleUpdate = () => {
        setMovie({ ...movie, category: 'Drama' })
    }

    return (
        <>
            <div>
                <h2>Movie</h2>
                <span>Title: {movie.title}</span>
                <span>Category: {movie.category}</span>
            </div>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default App
