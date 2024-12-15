import { useState } from 'react';
import { products } from '../data/products';

const StateSample9 = () => {
    const [search, setSearch] = useState();
    const [productList, setProductList] = useState(products);

    // const [minPrice, setMinPrice] = useState(0);
    // const [maxPrice, setMaxPrice] = useState(0);
    const [price, setPrice] = useState({ minPrice: 0, maxPrice: 0 });

    const searchProducts = () => {
        const searchName = search.toLowerCase().trim();

        // eşit olan filtresi
        // const filteredProducts = products.filter(
        //     (product) => product.name.toLowerCase().trim() === searchName
        // );

        // başlayan filtresi
        // const filteredProducts = products.filter(
        //     (product) => product.name.toLowerCase().trim().startsWith(searchName)
        // );

        const filteredProducts = products.filter((product) =>
            product.name.toLowerCase().trim().includes(searchName)
        );

        setProductList(filteredProducts);
        // setProductList([...filteredProducts]);
    };

    const handlePrice = (value, isMin) => {
        if (isMin) {
            setPrice((prev) => ({
                ...prev,
                minPrice: value,
            }));
        } else {
            setPrice((prev) => ({
                ...prev,
                maxPrice: value,
            }));
        }
    };
    // const handlePrice = (min, max) => {};

    const getProducts = () => {
        const filteredProducts = products.filter(
            (product) =>
                product.unitPrice > price.minPrice &&
                product.unitPrice < price.maxPrice
        );
        setProductList(filteredProducts);
    };

    return (
        <>
            <div>
                <label>Search: </label>
                <input
                    type='text'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button onClick={searchProducts}>Search</button>
            </div>

            <div>
                <label>Min Price: </label>
                <input
                    type='number'
                    // onChange={(e) => setMinPrice(e.target.value)}
                    // onChange={(e) => {
                    //     // setPrice((prev) => {
                    //     //     prev.minPrice = +e.target.value;
                    //     //     return { ...prev };
                    //     // });

                    //     setPrice((prev) => ({
                    //         ...prev,
                    //         minPrice: +e.target.value,
                    //     }));
                    // }}
                    onChange={(e) => handlePrice(+e.target.value, true)}
                    // onChange={(e) => handlePrice(+e.target.value, null)}
                />
            </div>

            <div>
                <label>Max Price: </label>
                <input
                    type='number'
                    // onChange={(e) => setMaxPrice(e.target.value)}
                    // onChange={(e) => {
                    //     setPrice((prev) => ({
                    //         ...prev,
                    //         maxPrice: +e.target.value,
                    //     }));
                    // }}
                    onChange={(e) => handlePrice(+e.target.value, false)}
                    // onChange={(e) => handlePrice(null, +e.target.value)}
                />
            </div>

            <div>
                <button onClick={getProducts}>Get Products</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product) => {
                        return (
                            <tr key={product.id}>
                                <td>{product.name}</td>
                                <td>{product.unitsInStock}</td>
                                <td>{product.unitPrice}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};

export default StateSample9;
