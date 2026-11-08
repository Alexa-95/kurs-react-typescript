import { useState } from 'react'
import Navigation from './components/Navigation'
import ProfilePage from './components/ProfilePage'

const App = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'Edward Mathews',
        role: 'Administrator'
    })

    const handleUpdate = () => {
        setUser({...user, name: 'Albert Pine'})
    }

    return (
        <>
            <Navigation user={user} />
            <ProfilePage user={user} onUpdate={handleUpdate} />
        </>
    )
}

export default App
