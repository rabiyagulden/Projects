const JsxSample = () => {
    const name = 'Korhan';
    const age = 18;
    const user = {
        name: 'Korhan',
        surname: 'Kosece',
        age: 18,
        city: 'İstanbul',
    };

    const onlineStatus = false;
    return (
        <>
            <p>{name}</p>
            <p>{age}</p>
            <p>{user.city.toLocaleUpperCase()}</p>
            <p>{onlineStatus ? 'Kullanıcı Online!' : 'Kullanıcı Offline!'}</p>
        </>
    );
};

export default JsxSample;
