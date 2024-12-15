import JsxSample from './JSXSample/JsxSample';
import JsxListSample from './JSXSample/JsxListSample';
import JsxListSample2 from './JSXSample/JsxListSample2';
import JsxListSample3 from './JSXSample/JsxListSample3';
import JSXStyleSample from './JSXStyle/JSXStyleSample';
import GourmetTemplate from './templateSample/GourmetTemplate';
import Page from './propsSample/Page';
import UserPage from './propsSample/UserPage';
import StateSample from './stateSample/StateSample';
import StateSample2 from './stateSample/StateSample2';
import StateSample3 from './stateSample/StateSample3';
import StateSample4 from './stateSample/StateSample4';
import StateSample5 from './stateSample/StateSample5';
import StateSample6 from './stateSample/StateSample6';
import StateSample7 from './stateSample/StateSample7';
import StateSample8 from './stateSample/StateSample8';
import StateSample9 from './stateSample/StateSample9';
import EffectSample from './effectSample/EffectSample';
import EffectSample2 from './effectSample/EffectSample2';
import CategoryList from './apiOperations/CategoryList';
import OrderList from './apiOperations/OrderList';
import AddCategory from './apiOperations/AddCategory';
import CategoryPage from './serviceSample/CategoryPage';
import ProductPage from './contextSample/ProductPage';
import { CartProvider } from './contexts/CartContext';
import CategoryTable from './antdesignSample/CategoryTable';

const App = () => {
    return (
        <>
            <CartProvider>
                {/* <div> */}
                {/* <React.Fragment> */}
                {/* <JsxSample />
            <JsxListSample /> */}
                {/* <JsxListSample2 /> */}
                {/* <JsxListSample3 /> */}
                {/* <JSXStyleSample /> */}
                {/* </React.Fragment>*/}
                {/* </div> */}
                {/* <p className='sample'>asdasdasdasm</p> */}
                {/* <GourmetTemplate /> */}
                {/* <Page /> */}
                {/* <UserPage /> */}
                {/* <EffectSample /> */}
                {/* <CategoryList /> */}
                {/* <OrderList /> */}
                {/* <AddCategory /> */}
                {/* <CategoryPage /> */}
                {/* <ProductPage /> */}
                <CategoryTable />
            </CartProvider>
        </>
    );
};

export default App;
