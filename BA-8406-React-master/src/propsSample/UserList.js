const UserList = (props) => {
    return (
        <>
            {props.userList.map((user) => {
                return (
                    <div key={user.id}>
                        <h1>{user.id}</h1>
                        <p>{user.name}</p>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                        <p>{user.address.city}</p>
                    </div>
                );
            })}
        </>
    );
};

export default UserList;
