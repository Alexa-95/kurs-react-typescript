import { useState } from 'react'

const App = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'Johnny', role: 'Administrator' },
        { id: 2, name: 'Christine', role: 'Editor' }
    ])

    const handleUpdate = () => {
        setUsers(users.map(user => user.id === 2 ? {...user, role: 'Contribiutor'} : user))
    }

    return (
        <>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>
                        Name: {user.name} - Role: {user.role}
                    </li>
                ))}
            </ul>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}

export default App
