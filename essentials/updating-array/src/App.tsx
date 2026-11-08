import { useState } from 'react'

const App = () => {
    const [names, setNames] = useState(['Chris', 'Lana', 'Lily', 'Tim'])

    const handleClick = () => {
        //UPDATE LISY BY UPDATE STATE

        //Add
        setNames([...names, 'Gerry'])

        //Remove
        setNames(names.filter((name: string) => name !== 'Chris'))

        //Update
        setNames(names.map(name=> (name === 'Tim' ? 'Frank' : name)))
    }

    return (
        <>
            <div>
                <ul>
                    {names.map((name, index) => (
                        <li key={index}>{name}</li>
                    ))}
                </ul>
                <button onClick={handleClick}>Click</button>
            </div>
        </>
    )
}

export default App
