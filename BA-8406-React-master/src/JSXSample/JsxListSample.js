const JsxListSample = () => {
    const cities = ['İstanbul', 'Ankara', 'İzmir', 'Berlin', 'Havana'];
    // const x = cities.map((city) => {
    //     return <li>{city}</li>;
    // });
    // console.log(x);
   
    return (
        <ul>
            {cities.map((city) => {
                return <li>{city}</li>;
            })}
            {/* {cities.forEach((city) => (
                <li>{city}</li>
            ))} */}
            {/* {[<li>İstanbul</li>, <li>Ankara</li>]} */}

            {/* {[<li>İstanbul</li>, <li>İstanbul</li>, <li>İstanbul</li>]} */}
        </ul>
    );
};

export default JsxListSample;
