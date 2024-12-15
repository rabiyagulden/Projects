import './sample.css';

const JSXStyleSample = () => {
    const boxStyle = { width: 200, height: 200, backgroundColor: 'red' };

    const onlineStatus = true;
    return (
        // <div style={{ width: 200, height: 200, backgroundColor: 'red' }}></div>
        // <div style={onlineStatus ? boxStyle : {}}></div>
        // <div
        //     style={
        //         onlineStatus
        //             ? boxStyle
        //             : { ...boxStyle, backgroundColor: 'black' }
        //     }></div>
        <p className='sample'>Lorem ipsum</p>
    );
};

export default JSXStyleSample;
