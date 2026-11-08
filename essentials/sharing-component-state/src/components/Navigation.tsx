import { User } from '../types/user'

const Navigation = ({ user }: User) => {
    return <div>Logged in user: {user.name}</div>
}

export default Navigation
