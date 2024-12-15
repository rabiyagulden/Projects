const Menu = ({ menuList }) => {
    return (
        <div>
            <div className='w3-row w3-padding-64' id='menu'>
                <div className='w3-col l6 w3-padding-large'>
                    <h1 className='w3-center'>Our Menu</h1>
                    <br />
                    {menuList.map((item) => {
                        return (
                            <div key={item.name}>
                                <h4>{item.name}</h4>
                                <p className='w3-text-grey'>
                                    {item.description.toLocaleUpperCase()}{' '}
                                    {item.price} TL
                                </p>
                                <br />
                            </div>
                        );
                    })}
                </div>
                <div className='w3-col l6 w3-padding-large'>
                    <img
                        src='https://www.w3schools.com/w3images/tablesetting.jpg'
                        className='w3-round w3-image w3-opacity-min'
                        alt='Menu'
                        style={{ width: '100%' }}
                    />
                </div>
            </div>
            <hr />
        </div>
    );
};

export default Menu;
