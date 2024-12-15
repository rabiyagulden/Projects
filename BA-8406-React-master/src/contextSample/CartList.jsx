import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

const CartList = () => {
    const { cart, removeItem } = useContext(CartContext);

    // const removeItem = (id) => {
    //     cart.filter((item) => item.id !== id);
    // };

    return (
        <ul>
            {cart.map((item) => (
                <li key={item.id}>
                    {item.name} X {item.quantity} -{' '}
                    {(item.quantity * item.unitPrice).toFixed(2)} TL
                    <button onClick={() => removeItem(item.id)}>
                        Remove Item
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default CartList;
