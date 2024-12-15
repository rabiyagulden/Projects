const UserList2 = (props) => {
    return (
        <>
            {props.userList.map((user) => {
                return (
                    <div key={user.id}>
                        <p>{user.company.name}</p>
                        <p>{user.company.catchPhrase}</p>
                        <p>{user.company.bs}</p>
                    </div>
                );
            })}
        </>
    );
};

export default UserList2;
