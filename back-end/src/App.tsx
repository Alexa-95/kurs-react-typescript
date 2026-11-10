import { useEffect, useState } from "react"
import apiClient, { CanceledError } from "./services/apiClient";

interface User {
  id: string
  first_name: string
  middle_name: string
  last_name: string
}

function App() {
  const [users, setUsers] = useState<User[]>([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // const fetchUsers = async () => {
    //   try {
    //     const response = await axios.get<User[]>(
    //     "https://jsonfakery.com/users/random/10",
    //   );
    //   setUsers(response.data)
    //   } catch (error) {
    //     setError((error as AxiosError).message);
    //   }
    // }
    // fetchUsers()

    const controller = new AbortController();

    setLoading(true);
    apiClient
      .get<User[]>("/users/random/10", {
        signal: controller.signal,
      })
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);

        setLoading(false);
      });

    return () => controller.abort()
  }, [])

  const deleteUser = (user: User) => {
    setUsers(users.filter(u => u.id !== user.id))
    apiClient
      .delete("/user/" + user.id)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }

  const addUser = () => {
    const originalUsersData = [...users];
    const newUser = {
      id: '',
      first_name: 'Jon',
      middle_name: 'Stephen',
      last_name: 'Doe'
    }
    setUsers([newUser, ...users])

    apiClient
      .post("/user/", newUser)
      .then(({ data: createdUser }) => setUsers([createdUser, ...users]))
      .catch((error) => {
        setError(error.message);
        setUsers(originalUsersData);
      });
  }

  const updateUser = (user: User) => {
      const updateUser = {...user, first_name: 'Shawn'}
      setUsers(users.map(u => (u.id === user.id ? updateUser : u)))

      apiClient
        .patch("/user/" + user.id, updateUser)
        .then((response) => console.log(response))
        .catch((error) => {
          setError(error.message);
          console.log(error.message);
        });
  }

  return (
    <>
      <div className="flex flex-col p-8">
        {error !== "" && <p className="text-red-500">{error}</p>}
        {loading && (
          <img src="/loader.svg" alt="Ładowanie..." width={24} height={24} />
        )}
        <ul className="w-1/2 divide-y divide-gray-300">
          <button
            className="bg-blue-500 text-white px-4 py-1 rounded-lg hover:bg-blue-700"
            onClick={addUser}
          >
            Create User
          </button>
          {users.map((user) => (
            <li
              key={user.id}
              className="flex justify-between leading-loose py-1"
            >
              {user.first_name} {user.middle_name} {user.last_name}
              <div className="flex gap-2">
                <button 
                    className="bg-white text-green-500 border border-green-500 px-4 py-1 rounded-lg hover:bg-green-500 hover:text-white"
                    onClick={() => updateUser(user)}
                >
                  Update
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-700"
                  onClick={() => deleteUser(user)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App
