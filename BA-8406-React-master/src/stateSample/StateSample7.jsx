import { useState } from 'react';
import { users } from '../data/users';

const StateSample7 = () => {
    const [userList, setUserList] = useState(users);

    const addNewUser = (e) => {
        e.preventDefault();
        // console.log(e.target[0].value);
        // console.log(e.target[1].value);
        // console.log(e.target[2].value);

        const name = e.target.name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;

        const newUser = { id: 11, name: name, username, email };
        setUserList((prev) => [newUser, ...prev]);
    };

    return (
        <>
            {/* <form onSubmit={(e) => addNewUser(e)}> */}
            <form onSubmit={addNewUser}>
                <div>
                    <label>Name: </label>
                    <input type='text' name='name' />
                </div>
                <div>
                    <label>Username: </label>
                    <input type='text' name='username' />
                </div>
                <div>
                    <label>Email: </label>
                    <input type='text' name='email' />
                </div>
                <div>
                    <button type='submit'>Add New User</button>
                </div>
            </form>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {userList.map((user) => {
                        return (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default StateSample7;
