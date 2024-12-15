import { useContext, useState } from 'react';
import { baseService } from '../network/services/baseService';
import { useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';

const ProductList = () => {
    const [productList, setProductList] = useState([]);
    // const [cart, setCart] = useState([]);
    const {
        cart,
        // setCart,
        addToCart,
    } = useContext(CartContext);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () => {
        try {
            const data = await baseService.get('/products');
            setProductList(data);
        } catch (error) {
            console.log('ProductList page get error', error);
        }
    };

    // const addToCart = (product) => {
    //     const { id, name, unitPrice } = product;
    //     const cardProduct = cart.find((item) => item.id === product.id);

    //     if (cardProduct) {
    //         cardProduct.quantity += 1;
    //         setCart((prev) => [...prev]);
    //     } else {
    //         const newProduct = {
    //             id: id,
    //             name: name,
    //             unitPrice,
    //             quantity: 1,
    //         };

    //         setCart((prev) => [...prev, newProduct]);
    //     }
    // };

    return (
        <>
            {/* <h1>Cart Count: {cart.length}</h1> */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Unit Price</th>
                        <th>Add Cart</th>
                    </tr>
                </thead>
                <tbody>
                    {productList &&
                        productList.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>
                                        <button
                                            onClick={() => addToCart(product)}>
                                            Add Cart
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default ProductList;
