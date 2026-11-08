import { useState } from 'react'

const App = () => {
    const [person, setPerson] = useState({
        name: 'Dimitry',
        contact: {
            email: 'dim@example.com',
            mobile: '0976 123 4567'
        }
    })

    const handleUpdate = () => {
        setPerson({ ...person, contact: {...person.contact, email: 'new@email.com' } })
    }
    
    return (
        <div>
            <span>Name: {person.name}</span>
            <span>Email: {person.contact.email}</span>
            <span>Mobile: {person.contact.mobile}</span>
            <button ocClick={handleUpdate}>Update</button>
        </div>
    )
}

export default App
