import { useEffect, useState } from 'react';

const AddCategory = () => {
    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState({ name: '', description: '' });
    // const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = () => {
        fetch('https://northwind.vercel.app/api/categories')
            .then((response) => response.json())
            .then((data) => setCategoryList(data));
    };

    const addCategory = () => {
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(category),
        };

        fetch('https://northwind.vercel.app/api/categories', config)
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);

                // Server-side yöntem
                // setRefresh((prev) => !prev);
                // getCategories()

                // Client-side yöntem
                setCategoryList((prev) => [...prev, data]);
            })
            .catch((err) => console.log(err));
    };

    return (
        <>
            <div>
                <label>Name: </label>
                <input
                    type='text'
                    onChange={(e) =>
                        setCategory((prev) => ({
                            ...prev,
                            name: e.target.value,
                        }))
                    }
                />
            </div>

            <div>
                <label>Description: </label>
                <input
                    type='text'
                    onChange={(e) =>
                        setCategory((prev) => ({
                            ...prev,
                            description: e.target.value,
                        }))
                    }
                />
            </div>

            <div>
                <button onClick={addCategory}>Add</button>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {categoryList &&
                        categoryList.map((category) => {
                            return (
                                <tr key={category.id}>
                                    <td>{category.id}</td>
                                    <td>{category.name}</td>
                                    <td>{category.description}</td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </>
    );
};

export default AddCategory;
