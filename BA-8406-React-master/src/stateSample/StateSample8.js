import { useState } from 'react';
import { users } from '../data/users';

const StateSample8 = () => {
    const [userList, setUserList] = useState(users);
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [count, setCount] = useState(0);

    const addNewUser = () => {
        const newUser = {
            id: 11,
            name: name,
            username: username,
            email: email,
        };
        setUserList((prev) => {
            return [newUser, ...prev];
        });
    };

    const deleteUser = (id) => {
        if (id) {
            setUserList((prev) => prev.filter((user) => user.id !== id));
        }
    };

    const getUsers = () => {
        setUserList(users.slice(0, count));
    };
    return (
        <>
            <div>
                <label>Name: </label>
                <input type='text' onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label>Username: </label>
                <input
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div>
                <label>Email: </label>
                <input type='text' onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
                <button onClick={addNewUser}>Add New User</button>
            </div>

            <div>
                <div>
                    <label>Count: </label>
                    <input
                        type='number'
                        onChange={(e) => setCount(e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={getUsers}>Get Users</button>
                </div>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button onClick={() => deleteUser(user.id)}>
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default StateSample8;
