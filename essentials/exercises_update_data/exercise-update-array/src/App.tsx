import { useState } from 'react'

const App = () => {
    const [fruits, setFruits] = useState([
        'Apple',
        'Grapes',
        'Peach',
        'Watermelon'
    ])

    const handleUpdateFruids = () => {
        // setFruits([...fruits, 'Banana']);
        // setFruits(fruits.filter(fruit => fruit !== 'Apple'))
        setFruits(fruits,map(fruit => fruit === 'Melon' ? 'Banana' : fruit))
        
    }

    return (
        <>
            <ul>
                {fruits.map((fruit, index) => (
                    <li key={index}>{fruit}</li>
                ))}
            </ul>
            <button onClick={handleUpdateFruids}>Update</button>
        </>
    )
}

export default App
