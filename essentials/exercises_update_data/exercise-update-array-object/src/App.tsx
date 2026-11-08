import { useState } from 'react'

const App = () => {
    const [tasks, setTasks] = useState([
        {
            id: 1,
            name: 'Buy Vegetables',
            description: 'Need to buy veggies at the store.'
        },
        {
            id: 2,
            name: 'Exercise',
            description: 'Need to exercise for 3 hours.'
        }
    ])

    const handleUpdate = () => {
        setTasks(tasks.map((task) => task.id === 2 ? {...task, name: 'New Exercise'} : task))
    }

    return (
        <>
            <div>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>{task.name}</li>
                    ))}
                </ul>
                <button onClick={handleUpdate}>Update</button>
            </div>
        </>
    )
}

export default App
