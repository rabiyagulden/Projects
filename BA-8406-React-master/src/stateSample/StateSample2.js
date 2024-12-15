import { useState } from 'react';

const StateSample2 = () => {
    // let nameSurname = 'Korhan Kösece';
    const [nameSurname, setNameSurname] = useState('Korhan Kösece');

    const changeName = () => {
        // console.log(nameSurname);
        // nameSurname = 'Dave Grohl';
        // console.log(nameSurname);
        setNameSurname('Dave Grohl');
    };

    // console.log(nameSurname);
    console.log(1);

    return (
        <div>
            <h1>{nameSurname}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
};

export default StateSample2;
