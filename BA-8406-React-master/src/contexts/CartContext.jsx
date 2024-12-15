import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        const { id, name, unitPrice } = product;
        const cardProduct = cart.find((item) => item.id === product.id);

        if (cardProduct) {
            cardProduct.quantity += 1;
            setCart((prev) => [...prev]);
        } else {
            const newProduct = {
                id: id,
                name: name,
                unitPrice,
                quantity: 1,
            };

            setCart((prev) => [...prev, newProduct]);
        }
    };

    const removeItem = (id) => {
        setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const values = {
        cart,
        // setCart,
        addToCart,
        removeItem,
    };

    return (
        <CartContext.Provider value={values}>{children}</CartContext.Provider>
    );
};
