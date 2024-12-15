import logo from './logo.svg';
import './App.css';
import Buton from './Buton';
import SuppliersTable from './Suppliers';
import HomePage from './HomePage';
import About from './About';
import RefSample from './RefSample';



const App = () => {
  return (
    <>
      {/* <CartProvider>
        <ProductPage />
      </CartProvider>
         <SuppliersTable></SuppliersTable> 
           <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </BrowserRouter>
      ////////
         <BrowserRouter>
        <Layout className='layout'>
          <Header>
            <div className='demo-logo'> </div>
            <Menu
              theme='dark'
              mode='horizontal'
              defaultSelectedKeys={['home']}
              items={[
                {
                  key: 'home',
                  label: <Link to='/'> Home</Link>,
                },
                {
                  key: 'about',
                  label: <Link to='/about'> About</Link>,

                },
              ]}

            />
          </Header>

          <Content>main content</Content>
          <Footer>footer</Footer>
        </Layout>
      </BrowserRouter>


      
      */}

      <RefSample></RefSample>
    </>
  );
};
export default App;
