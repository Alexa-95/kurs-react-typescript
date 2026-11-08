import { useState } from 'react'

const App = () => {
    const tasks = ['Wake up', 'Eat', 'Workout', 'Code', 'Sleep', 'Repeat']
    const [active, setActive] = useState(0)

    return (
        <>
            <h1 className="text-2xl font-bold">My Everyday Routine</h1>
            <ul className="list-style">
                {tasks.map((task, index) => (
                    <li key={index} className="list-item-style">
                        {task}
                    </li>
                ))}
            </ul>

            <ul className="list-style">
                {tasks.map((task, index) => (
                    <li key={index} className="list-item-style">
                        {task}
                    </li>
                ))}
            </ul>
        </>
    )
}

export default App
