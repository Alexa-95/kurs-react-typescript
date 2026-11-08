import { useState } from 'react'
import { produce } from 'immer'

const UserProfile = () => {
    const [user, setUser] = useState({
        id: 1,
        name: 'John Doe',
        role: 'Administrator',
        email: 'johndoe@example.com',
        dateAdded: '2024-09-17',
        address: {
            street: '#14 King St.'
        }
    })

    const updateUser = () => {
      const updatedUser = produce(user, (draft) => {
        draft.name = "Jane Doe";
        draft.email = "janedoe@example.com";
        draft.address.street = "#15 Queens St.";
      });
      setUser(updatedUser);

    // Old way
    // setUser({ ...user, address: {...user.address, street: '#15 Queens St.'}});


    };

    return (
        <>
            <h2>User Profile</h2>
            <p>ID: {user.id}</p>
            <p>Name: {user.name}</p>
            <p>Role: {user.role}</p>
            <p>Email: {user.email}</p>
            <p>Date Added: {user.dateAdded}</p>
            <p>Address: {user.address.street}</p>
            <button onClick={updateUser}>Update User</button>
        </>
    )
}

export default UserProfile
