import About from './About';
import Contact from './Contact';
import Menu from './Menu';

const PageContent = () => {
    const menuList = [
        {
            name: 'Quattro Pizza',
            description: 'Bol peynirli lezziz bir pizza...',
            price: 225,
        },
        {
            name: 'Steak',
            description: 'Az pişmiş, sulu bir lezzet...',
            price: 420,
        },
        {
            name: 'Cheeseburger',
            description: 'Lorem ipsum',
            price: 270,
        },
    ];
    return (
        <div className='w3-content' style={{ maxWidth: '1100px' }}>
            <About />
            <Menu menuList={menuList} />
            <Contact />
        </div>
    );
};

export default PageContent;
