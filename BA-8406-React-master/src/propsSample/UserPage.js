import { users } from '../data/users';
import UserList from './UserList';
import UserList2 from './UserList2';

const UserPage = () => {
    return (
        <>
            <UserList userList={users} />
            <hr></hr>
            <UserList2 userList={users} />
        </>
    );
};

export default UserPage;
