import { useState } from 'react';

const StateSample6 = () => {
    const [user, setUser] = useState({ name: 'Serhan Anıl', surname: 'Kılıç' });

    const handleClick = () => {
        // user.name = 'Zafer';
        // setUser({ ...user });

        // setUser({ ...user, name: 'Zafer' });

        setUser((prev) => {
            return { ...prev, name: 'Zafer' };
        });
    };

    return (
        <>
            <p>{user.name}</p>
            <p>{user.surname}</p>
            <button onClick={handleClick}>Change</button>
        </>
    );
};

export default StateSample6;
