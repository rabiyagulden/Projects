import { useEffect, useLayoutEffect, useState } from 'react';

const EffectSample = () => {
    const [count, setCount] = useState(0);

    console.log('component render');

    useEffect(() => {
        console.log('useEffect çalıştı');
    }, []);

    useLayoutEffect(() => {
        console.log('useLayoutEffect çalıştı');
        alert('alert')
    }, []);

    return (
        <>
            <h1>Sayac: {count}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Arttır</button>
        </>
    );
};

export default EffectSample;
