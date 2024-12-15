import { useState } from 'react';

const StateSample3 = () => {
    const [isOnline, setIsOnline] = useState(false);

    console.log('isOnline', isOnline);
    return (
        <>
            <p>{isOnline ? 'Kullanıcı Online' : 'Kullanıcı Offline'}</p>
            <button onClick={() => setIsOnline(!isOnline)}>Change</button>
        </>
    );
};

export default StateSample3;
