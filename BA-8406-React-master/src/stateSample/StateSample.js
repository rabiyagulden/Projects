const StateSample = () => {
    let nameSurname = 'Korhan Kösece';

    const changeName = (e, data) => {
        console.log('change');
        console.log(e);
        console.log(data);

        // console.log(nameSurname);
        // nameSurname = 'Dave Grohl';
        // console.log(nameSurname);
    };

    console.log(nameSurname);
    document.querySelector('button')
    return (
        <div>
            <h1>{nameSurname}</h1>
            <button onClick={changeName}>Change Name</button>
            {/* <button onClick={(e) => changeName(e, nameSurname)}>
                Change Name
            </button> */}
            {/* <button
                onClick={() => {
                    changeName();
                }}>
                Change Name
            </button> */}
            {/* <button onClick={() => console.log('change')}>Change Name</button> */}
        </div>
    );
};

export default StateSample;
