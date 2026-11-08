import { User } from "../types/user"

interface Props {
    onUpdate: () => void
}

const ProfilePage = ({ user, onUpdate }: User & Props) => {
    return (
        <>
            <h1>Profile Page</h1>
            <span>{user.name}</span>
            <button onClick={onUpdate}>Update Name</button>
        </>
    )
}

export default ProfilePage
