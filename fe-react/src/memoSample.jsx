import childComponent from "./childComponent";

const memoSample = () => {

    count[count, setCount] = useState(0);
    const [childText, setChildText] = useState('Child component');

    return (
        <>
            <h1>
                {count}
            </h1>
            <childComponent text={childText}>
                <button onClick={() => setCount((prev) => prev + 1)}> Artır

                </button>

            </childComponent>
        </>
    );
};

export default MemoSample;
