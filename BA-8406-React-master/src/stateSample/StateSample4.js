import { useState } from 'react';

const StateSample4 = () => {
    const [count, setCount] = useState(0);

    const increase = () => {
        // setCount(count + 1);
        // setCount(count + 1);

        setCount((count) => {
            return count + 1;
        });
        setCount((count) => {
            return count + 1;
        });
    };

    return (
        <>
            {/* <button onClick={() => setCount(count--)}>-</button> */}
            <button onClick={() => setCount(count === 0 ? count : count - 1)}>
                -
            </button>
            <h1>{count}</h1>
            <button onClick={increase}>+</button>
        </>
    );
};

export default StateSample4;
