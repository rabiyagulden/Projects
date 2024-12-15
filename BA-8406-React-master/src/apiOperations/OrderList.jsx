import { useEffect, useState } from 'react';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);
    const [staticData, setStaticData] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        fetch('https://northwind.vercel.app/api/orders')
            .then((response) => response.json())
            .then((data) => {
                setOrderList(data);
                setStaticData(data);
            });
    };

    const getOrders = () => {
        // setOrderList(staticData.slice(0, count));

        fetch('https://northwind.vercel.app/api/orders')
            .then((response) => response.json())
            .then((data) => setOrderList(data.slice(0, count)));
    };

    return (
        <>
            <div>
                <label>Count: </label>
                <input type='text' onChange={(e) => setCount(e.target.value)} />
            </div>

            <div>
                <button onClick={getOrders}>Get Orders</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Ship Name</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {orderList !== undefined
                        ? orderList.map((order) => {
                              return (
                                  <tr key={order.id}>
                                      <td>{order.customerId}</td>
                                      <td>{order.shipName}</td>
                                      <td>{order.shipAddress.city}</td>
                                  </tr>
                              );
                          })
                        : null} */}

                    {orderList &&
                        orderList.map((order) => {
                            return (
                                <tr key={order.id}>
                                    <td>{order.customerId}</td>
                                    <td>{order.shipName}</td>
                                    <td>{order.shipAddress.city}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default OrderList;
