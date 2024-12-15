import { useState } from 'react';

const StateSample5 = () => {
    const initalValue = [
        'AudioSlave',
        'Black Label Soceity',
        'Metallica',
        'Iron Maiden',
        'AC/DC',
    ];
    const [bands, setBands] = useState(initalValue);

    const clear = () => {
        setBands([]);
    };

    const add = () => {
        // console.log(bands);
        // bands.push('Rammstein');
        // console.log(bands);
        // setBands(bands);
        // setBands([...bands]);

        setBands([...bands, 'Rammstein']);
    };
    
    console.log(1);

    return (
        <>
            <ul>
                {bands.map((band) => (
                    <li key={band}>{band}</li>
                ))}
            </ul>
            <button onClick={add}>Add</button>
            <button onClick={clear}>Clear</button>
        </>
    );
};

export default StateSample5;
