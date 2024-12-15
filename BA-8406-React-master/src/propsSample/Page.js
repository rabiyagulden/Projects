import BAButton from './BAButton';

const Page = () => {
    // const name = 'Bilge Adam';

    const ekleStyle = { width: 100, height: 100, backgroundColor: 'green' };
    const cıkarStyle = { width: 100, height: 100, backgroundColor: 'orange' };
    const silStyle = { width: 100, height: 100, backgroundColor: 'red' };
    return (
        <div>
            <h1>React Props</h1>
            <BAButton
                //  name2='Bilge Adam 2' name={name}
                title='Ekle'
                style={ekleStyle}
                isDisabled={true}
            />
            <BAButton
                //  name2='Bilge Adam 2' name={name}
                title='Çıkar'
                style={cıkarStyle}
                isDisabled={false}
            />
            <BAButton
                //  name2='Bilge Adam 2' name={name}
                title='Sil'
                style={silStyle}
            />
        </div>
    );
};

export default Page;
