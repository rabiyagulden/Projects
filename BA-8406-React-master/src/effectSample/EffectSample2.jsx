import { useEffect, useState } from 'react';

const EffectSample2 = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    console.log('component render');

    useEffect(() => {
        console.log('useEffect çalıştı');
        setCount2((prev) => prev + 1);

        return () => {
            console.log('CLEANUP');
        };
    }, [count]);

    useEffect(() => {
        console.log('useEffect 2 çalıştı');
    }, [count2]);

    useEffect(() => {
        console.log('useEffect 3 çalıştı');
        const timeout = setTimeout(() => {
            console.log('checking...');
        }, 500);
        return () => {
            console.log('CLEANUP 2');
            clearTimeout(timeout);
            // sunucu isteğini iptal etmeye yarıyor
            // new  AbortController()
        };
    }, [count]);

    return (
        <>
            <h1>Sayac: {count}</h1>
            <h1>Sayac2: {count2}</h1>
            <button onClick={() => setCount((prev) => prev + 1)}>Arttır</button>
            <button onClick={() => setCount2((prev) => prev + 1)}>
                Arttır 2
            </button>
        </>
    );
};

export default EffectSample2;
